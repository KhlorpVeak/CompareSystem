import { OpenAPIHono } from '@hono/zod-openapi';
import { registerGetMeRoute } from "./me.v1.js";
import { registerAuthRoute } from "./auth.v1.js";

export const user_v1 = new OpenAPIHono();

registerAuthRoute(user_v1);
registerGetMeRoute(user_v1);
