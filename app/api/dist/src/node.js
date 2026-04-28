import { serve } from '@hono/node-server';
import { routes } from './routes/index.js';
import 'dotenv/config';
const port = process.env.PORT ? parseInt(process.env.PORT) : 4005;
console.log(`server running on http://localhost:${port}`);
serve({
    fetch: routes.fetch,
    port
});
