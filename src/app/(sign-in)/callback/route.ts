import { WorkOS } from '@workos-inc/node';
import { SignJWT } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

import { getJwtSecretKey } from '@/app/auth';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID;

export async function GET(req: NextRequest) {
  // TODO - Apply parsing for search params to avoid assertion
  const code = req.nextUrl.searchParams.get('code') as string;
  const url = req.nextUrl.clone();

  try {
    const { user } = await workos.userManagement.authenticateWithCode({
      code,
      clientId,
    });

    const token = await new SignJWT({ user })
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(getJwtSecretKey());

    url.searchParams.delete('code');
    url.pathname = '/generate-image';

    const response = NextResponse.redirect(url);

    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      const url = req.nextUrl.clone();

      url.searchParams.set('error_message', error.message);

      return NextResponse.redirect(url);
    }
  }

  return NextResponse.redirect(url);
}
