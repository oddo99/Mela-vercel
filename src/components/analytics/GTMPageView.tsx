'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

export function GTMPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

            // Push history change event - this creates a new "container" in GTM Preview
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'gtm.historyChange-v2',
                'gtm.historyChangeSource': 'pushState',
                'gtm.oldUrl': document.referrer || window.location.href,
                'gtm.newUrl': window.location.origin + url,
                'gtm.oldUrlFragment': '',
                'gtm.newUrlFragment': ''
            });

            // Also push a custom pageview event for your triggers
            window.dataLayer.push({
                event: 'pageview',
                page: pathname,
                url: url
            });
        }
    }, [pathname, searchParams]);

    return null;
}
