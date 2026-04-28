export const backofficeAuthMiddleware = async (c, next) => {
    // Simple mock auth for testing
    c.set('user', { id: 1, role: 'admin' });
    await next();
};
