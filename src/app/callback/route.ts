import { WorkOS } from '@workos-inc/node';
import { NextRequest, NextResponse } from 'next/server';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID as string;

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code') as string;

  try {
    const { user } = await workos.userManagement.authenticateWithCode({
      code,
      clientId,
    });
  } catch (error) {
    if (error instanceof Error) {
      const url = req.nextUrl.clone();

      url.searchParams.set('error_message', error.message);

      return NextResponse.redirect(url);
    }
  }

  const url = req.nextUrl.clone();
  url.searchParams.delete('code');
  url.pathname = '/';

  return NextResponse.redirect(url);
}
