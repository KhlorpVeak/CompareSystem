import { z } from 'zod';

export const AdminProfileSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  role: z.string().optional(),
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string().optional(),
});

export type AdminProfile = z.infer<typeof AdminProfileSchema>;
export type User = z.infer<typeof UserSchema>;
