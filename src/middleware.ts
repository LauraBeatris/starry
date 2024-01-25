import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isOnLandingPage = request.nextUrl.pathname === '/';

  if (!isOnLandingPage && !request.cookies.has('token')) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|callback).*)'],
};
