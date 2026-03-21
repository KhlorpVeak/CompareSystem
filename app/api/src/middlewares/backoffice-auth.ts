import { Context, Next } from 'hono';

export const backofficeAuthMiddleware = async (c: Context, next: Next) => {
  // Simple mock auth for testing
  c.set('user', { id: 1, role: 'admin' });
  await next();
};
