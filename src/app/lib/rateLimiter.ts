import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { User } from '@workos-inc/node';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, '1440 m'),
  analytics: true,
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
    throw new Error(
      `Rate limit exceeded. Your generations will renew in ${hours} hours and ${minutes} minutes.`,
    );
  }
}
