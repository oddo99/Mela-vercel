const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://admin.mela.services/graphql';

async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
    const headers = { 'Content-Type': 'application/json' };

    // If we need authentication in the future, add it here
    // if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    //   headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
    // }

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                query,
                variables,
            }),
            next: { revalidate: 60 }, // Revalidate every 60 seconds
        });

        const json = await res.json();
        if (json.errors) {
            console.error(json.errors);
            return null;
        }
        return json.data;
    } catch (error) {
        console.warn(`Failed to fetch from WordPress API at ${API_URL}. Returning empty data.`);
        return null;
    }
}

export async function getAllPosts() {
    const data = await fetchAPI(
        `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `
    );
    return data?.posts?.nodes;
}

export async function getPostBySlug(slug: string) {
    const data = await fetchAPI(
        `
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        excerpt
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  `,
        {
            variables: {
                id: slug,
                idType: 'SLUG',
            },
        }
    );
    return data?.post;
}
