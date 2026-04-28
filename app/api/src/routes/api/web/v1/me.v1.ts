import { createRoute, z } from '@hono/zod-openapi';
import { db } from '@comparesystem/db';
import { AdminProfileSchema } from '@comparesystem/shared';
import { UserService } from '../../../../services/user.service.js';

const userService = new UserService(db);

// route definition
const getMeRoute = createRoute({
  method: 'get',
  path: '/v1/me',
  tags: ['Web'],
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            data: AdminProfileSchema,
          }),
        },
      },
      description: 'Get current user profile successfully',
    },
  },
});

// function return
export function registerGetMeRoute(api: any) {
  return api.openapi(getMeRoute, async (c: any) => {
    const user = c.get('user').id;
    const userProfile = await userService.getCurrentUserProfile(user);
    return c.json(
      {
        success: true,
        data: userProfile,
      },
      200
    );
  });
}
