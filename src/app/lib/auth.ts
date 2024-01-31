import { WorkOS } from '@workos-inc/node';
import type { User } from '@workos-inc/node';
import * as E from 'fp-ts/lib/Either';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID;
const redirectUri = process.env.WORKOS_REDIRECT_URI;

export function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET_KEY;

  return new Uint8Array(Buffer.from(secret, 'base64'));
}

export async function verifyJwtToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return E.right(payload);
  } catch (error) {
    return E.left('Error while verifying JWT token');
  }
}

export async function getUser() {
  const token = cookies().get('token')?.value;

  if (!token) {
    return E.left('Not authenticated');
  }

  const verifiedTokenResult = await verifyJwtToken(token);

  if (E.isLeft(verifiedTokenResult)) {
    return verifiedTokenResult;
  }

  return E.right({
    isAuthenticated: true,
    user: verifiedTokenResult.right.user as User,
  });
}

export async function signOut() {
  cookies().delete('token');
  redirect('/');
}

export function getAuthorizationUrl() {
  return workos.userManagement.getAuthorizationUrl({
    provider: 'authkit',
    redirectUri,
    clientId,
  });
}
