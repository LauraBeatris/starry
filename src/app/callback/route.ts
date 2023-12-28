import { WorkOS } from '@workos-inc/node';
import { NextRequest, NextResponse } from 'next/server';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID as string;

interface WorkOSError extends Error {
  status: number;
  rawData: {
    code: 'email_verification_required';
  };
}

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code') as string;

  try {
    const { user } = await workos.userManagement.authenticateWithCode({
      code,
      clientId,
    });
  } catch (error) {
    // TODO - Refactor error parsing
    if (error instanceof Error && 'rawData' in error) {
      const errorCode = (error as WorkOSError).rawData.code;

      switch (errorCode) {
        case 'email_verification_required':
          return NextResponse.redirect(
            new URL('/email-verification-required', req.url),
          );
        default:
          const url = req.nextUrl.clone();
          url.searchParams.set('error_message', error.message);
          return NextResponse.redirect(url);
      }
    }
  }

  const url = req.nextUrl.clone();
  url.searchParams.delete('code');
  url.pathname = '/';

  return NextResponse.redirect(url);
}
