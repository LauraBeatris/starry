import { getUser } from '../lib/auth';
import { performRateLimitByUser } from '../lib/rateLimiter';

export async function generateImage(form: FormData) {
  // TODO - Validate form data;
  // TODO - Call Replicate API

  const { user } = await getUser();
  if (!user) {
    throw new Error('User not found');
  }

  performRateLimitByUser(user);

  console.log('Generating image');
}
