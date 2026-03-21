import { OpenAPIHono } from '@hono/zod-openapi';
import { registerGetMeRoute } from "./me.v1.js";

export const user_v1 = new OpenAPIHono();

registerGetMeRoute(user_v1);
