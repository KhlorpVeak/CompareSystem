import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { api } from './routes/api/index.js';

// Initialize Hono App
const app = new Hono();

// Global Middlewares
app.use('*', logger());

// Check health
app.get('/health', (c) => c.json({ status: 'ok', time: new Date() }));

// Register routes
app.route('/api', api);

export default app;
