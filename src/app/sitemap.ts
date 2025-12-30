import { MetadataRoute } from 'next'

const BASE_URL = 'https://mela.services'

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date().toISOString()

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contatti`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/servizi`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/casistudio`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/termini-e-condizioni`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Service pages
    const servicePages: MetadataRoute.Sitemap = [
        'marketplace',
        'e-commerce',
        'leads',
        'advertising',
    ].map((service) => ({
        url: `${BASE_URL}/servizi/${service}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Case study pages
    const caseStudySlugs = [
        'alveario',
        'colleoni',
        'damco',
        'dermomamma',
        'ethicalgrace',
        'eusphera',
        'farmacia724',
        'formularity',
        'ftmetalli',
        'glielmi',
        'grifos',
        'life120',
        'molinochiavazza',
        'naturaevictus',
        'naturwaren',
        'pegasium',
        'rambloc',
        'roncoandrea',
        'valentiargenti',
        'venetian',
    ]

    const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
        url: `${BASE_URL}/casistudio/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...servicePages, ...caseStudyPages]
}
