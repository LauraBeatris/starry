import { WorkOS } from '@workos-inc/node';

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID;

export function getGitHubOAuthAuthorizationUrl() {
  return workos.userManagement.getAuthorizationUrl({
    provider: 'GitHubOAuth',
    redirectUri: 'http://localhost:3000/callback',
    clientId: clientId as string,
  });
}
