import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { User } from '@workos-inc/node';
import * as E from 'fp-ts/lib/Either';

export const rateLimiter = new Ratelimit({
  redis: kv,
  // Allows 5 requests per day
  limiter: Ratelimit.fixedWindow(5, '1440 m'),
});

export async function performRateLimitByUser(user: User) {
  const identifier = user.email;
  const result = await rateLimiter.limit(identifier!);

  const diff = Math.abs(
    new Date(result.reset).getTime() - new Date().getTime(),
  );
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor(diff / 1000 / 60) - hours * 60;

  if (!result.success) {
    return E.left(
      `Rate limit exceeded. Your generations will renew in ${hours} hours and ${minutes} minutes.`,
    );
  }

  return E.right(result);
}
