import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check if maintenance mode is enabled via environment variable
    const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

    // Paths to always allow (static files, api, etc)
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/static') ||
        request.nextUrl.pathname.startsWith('/api') ||
        request.nextUrl.pathname.includes('.') // files like favicon.ico, robots.txt
    ) {
        return NextResponse.next()
    }

    // If in maintenance mode and not on maintenance page, redirect to maintenance
    if (isMaintenanceMode && request.nextUrl.pathname !== '/maintenance') {
        return NextResponse.rewrite(new URL('/maintenance', request.url))
    }

    // If NOT in maintenance mode but user tries to access maintenance page, redirect to home
    // (Optional: keeps the maintenance page hidden when not needed)
    if (!isMaintenanceMode && request.nextUrl.pathname === '/maintenance') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
