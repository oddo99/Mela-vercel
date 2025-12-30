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

    // Get element name
    const getElementName = (element: HTMLElement): string => {
        if (element.getAttribute('data-track')) return element.getAttribute('data-track')!;
        if (element.id) return element.id;
        if (element.getAttribute('aria-label')) return element.getAttribute('aria-label')!;
        const text = element.innerText?.trim().substring(0, 50);
        if (text) return text;
        return element.tagName.toLowerCase();
    };

    // Get element type
    const getElementType = (element: HTMLElement): string => {
        const tag = element.tagName.toLowerCase();
        if (tag === 'button' || element.getAttribute('role') === 'button') return 'button';
        if (tag === 'a') return 'link';
        if (element.closest('nav')) return 'navigation';
        if (element.closest('footer')) return 'footer';
        return 'element';
    };

    // Click handler
    const handleClick = useCallback((event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target) return;

        const clickable = target.closest('button, a, [role="button"], [data-track]') as HTMLElement || target;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'custom_click',
            element_name: getElementName(clickable),
            element_type: getElementType(clickable),
            click_text: clickable.innerText?.trim().substring(0, 100) || '',
            click_url: clickable.getAttribute('href') || '',
            page_path: pathname
        });
    }, [pathname]);

    // Scroll handler
    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

        [25, 50, 75, 90].forEach((threshold) => {
            if (scrollPercent >= threshold && !scrollThresholds.current.has(threshold)) {
                scrollThresholds.current.add(threshold);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'custom_scroll',
                    scroll_percent: threshold,
                    page_path: pathname
                });
            }
        });
    }, [pathname]);

    useEffect(() => {
        if (pathname) {
            scrollThresholds.current = new Set();

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'custom_pageview',
                page_path: pathname,
                page_title: document.title
            });

            window.addEventListener('scroll', handleScroll);
            document.addEventListener('click', handleClick);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                document.removeEventListener('click', handleClick);
            };
        }
    }, [pathname, searchParams, handleScroll, handleClick]);

    return null;
}
