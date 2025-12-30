'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

export function GTMPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            // Push pageview event to dataLayer
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'pageview',
                page: pathname,
                search: searchParams?.toString() || '',
                url: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
            });
        }
    }, [pathname, searchParams]);

    return null;
}
