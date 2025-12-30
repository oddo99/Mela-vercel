'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

export function GTMPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const scrollThresholds = useRef<Set<number>>(new Set());

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

        const thresholds = [25, 50, 75, 90];

        thresholds.forEach((threshold) => {
            if (scrollPercent >= threshold && !scrollThresholds.current.has(threshold)) {
                scrollThresholds.current.add(threshold);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'scroll_depth',
                    scroll_threshold: threshold,
                    page: pathname
                });
            }
        });
    }, [pathname]);

    useEffect(() => {
        if (pathname) {
            const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

            // Reset scroll thresholds for new page
            scrollThresholds.current = new Set();

            // Push pageview event
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'pageview',
                page: pathname,
                url: url
            });

            // Add scroll listener
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [pathname, searchParams, handleScroll]);

    return null;
}
