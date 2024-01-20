import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID;
const redirectUri = process.env.WORKOS_REDIRECT_URI;

export function getAuthorizationUrl() {
  return workos.userManagement.getAuthorizationUrl({
    provider: 'authkit',
    redirectUri,
    clientId,
  });
}
