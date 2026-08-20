import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Separate, stricter bucket from the quote-form limiter - login is a brute-force
// target, so it gets fewer attempts per window.
export const loginRatelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(8, '10 m'),
  analytics: true,
  prefix: 'ratelimit:admin-login',
});
