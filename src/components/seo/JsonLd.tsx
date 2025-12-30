import React from 'react';

interface OrganizationSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    logo?: string;
}

export function OrganizationSchema({
    name = 'Mela Services',
    description = 'Agenzia specializzata in Marketplace, E-commerce, Lead Generation e Advertising. Esperti Amazon, Shopify e strategie digitali.',
    url = 'https://mela.services',
    logo = 'https://mela.services/images/logo-mela.png',
}: OrganizationSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name,
        description,
        url,
        logo,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Corso Dante 118',
            addressLocality: 'Torino',
            postalCode: '10126',
            addressCountry: 'IT',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+39-011-1883-7132',
            contactType: 'customer service',
            email: 'info@mela.services',
            availableLanguage: ['Italian', 'English'],
        },
        sameAs: [
            'https://www.facebook.com/melasrl',
            'https://www.instagram.com/mela.services/',
            'https://www.linkedin.com/company/melaservices',
            'https://www.tiktok.com/@melaservices',
        ],
        foundingDate: '2014',
        areaServed: 'Worldwide',
        knowsAbout: [
            'Amazon Marketplace',
            'E-commerce Strategy',
            'Digital Marketing',
            'Lead Generation',
            'PPC Advertising',
            'SEO',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface WebSiteSchemaProps {
    name?: string;
    url?: string;
}

export function WebSiteSchema({
    name = 'Mela Services',
    url = 'https://mela.services',
}: WebSiteSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name,
        url,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface LocalBusinessSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    image?: string;
}

export function LocalBusinessSchema({
    name = 'Mela Services',
    description = 'Agenzia di digital marketing specializzata in marketplace, e-commerce e advertising.',
    url = 'https://mela.services',
    image = 'https://mela.services/images/logo-mela.png',
}: LocalBusinessSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': url,
        name,
        description,
        url,
        image,
        telephone: '+39-011-1883-7132',
        email: 'info@mela.services',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Corso Dante 118',
            addressLocality: 'Torino',
            postalCode: '10126',
            addressRegion: 'Piemonte',
            addressCountry: 'IT',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 45.0467,
            longitude: 7.6775,
        },
        priceRange: '$$',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQPageSchemaProps {
    faqs: FAQItem[];
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
