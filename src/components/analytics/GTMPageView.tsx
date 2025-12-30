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

    // Get a readable name for the clicked element
    const getElementName = (element: HTMLElement): string => {
        // Check for specific attributes
        if (element.getAttribute('data-track')) return element.getAttribute('data-track')!;
        if (element.id) return element.id;
        if (element.getAttribute('aria-label')) return element.getAttribute('aria-label')!;

        // Get text content (limited)
        const text = element.innerText?.trim().substring(0, 50);
        if (text) return text;

        // Fallback to tag name and class
        const className = element.className?.split(' ')[0] || '';
        return `${element.tagName.toLowerCase()}${className ? '.' + className : ''}`;
    };

    // Get element type for categorization
    const getElementType = (element: HTMLElement): string => {
        const tag = element.tagName.toLowerCase();

        if (tag === 'button' || element.getAttribute('role') === 'button') return 'button';
        if (tag === 'a') return 'link';
        if (tag === 'input' || tag === 'select' || tag === 'textarea') return 'form_field';
        if (element.closest('nav')) return 'navigation';
        if (element.closest('footer')) return 'footer';
        if (element.closest('header')) return 'header';

        return 'element';
    };

    // Handle click events
    const handleClick = useCallback((event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target) return;

        // Find the most relevant clickable element
        const clickable = target.closest('button, a, [role="button"], [data-track]') as HTMLElement || target;

        const elementName = getElementName(clickable);
        const elementType = getElementType(clickable);
        const href = clickable.getAttribute('href') || '';

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'click',
            click_element_name: elementName,
            click_element_type: elementType,
            click_text: clickable.innerText?.trim().substring(0, 100) || '',
            click_url: href,
            click_classes: clickable.className || '',
            click_id: clickable.id || '',
            page_path: pathname
        });
    }, [pathname]);

    // Handle scroll events
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
                    page_path: pathname
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
                event: 'page_view',
                page_path: pathname,
                page_url: url,
                page_title: document.title
            });

            // Add event listeners
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
