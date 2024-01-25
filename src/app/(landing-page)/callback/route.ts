import { WorkOS } from '@workos-inc/node';
import { SignJWT } from 'jose';
import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';

import { getJwtSecretKey } from '@/app/lib/auth';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID;

const CallbackRequestQuery = z.object({
  code: z.string(),
});

export async function GET(request: NextRequest) {
  const query = Object.fromEntries(new URL(request.url).searchParams.entries());
  const parsedRequestQuery = CallbackRequestQuery.safeParse(query);
  const url = request.nextUrl.clone();

  if (!parsedRequestQuery.success) {
    url.searchParams.set('error_message', 'Invalid query params');

    return NextResponse.redirect(url);
  }

  try {
    const { user } = await workos.userManagement.authenticateWithCode({
      code: parsedRequestQuery.data.code,
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
      url.searchParams.set('error_message', error.message);

      return NextResponse.redirect(url);
    }
  }

  return NextResponse.redirect(url);
}
