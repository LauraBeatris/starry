import { WorkOS } from '@workos-inc/node';
import type { User } from '@workos-inc/node';
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
    return payload;
  } catch (error) {
    return null;
  }
}

export async function getUser() {
  const token = cookies().get('token')?.value;

  if (token) {
    const verifiedToken = await verifyJwtToken(token);

    if (verifiedToken) {
      return {
        isAuthenticated: true,
        // TODO - Remove assertion and apply parsing
        user: verifiedToken.user as User | null,
      };
    }
  }

  return { isAuthenticated: false };
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
