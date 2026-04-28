import { OpenAPIHono } from '@hono/zod-openapi';
import { registerGetMeRoute } from "./me.v1.js";
import { registerAuthRoute } from "./auth.v1.js";

export const user_v1 = new OpenAPIHono();

registerGetMeRoute(user_v1);
registerAuthRoute(user_v1);
