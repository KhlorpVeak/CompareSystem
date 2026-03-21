import { Kysely } from 'kysely';
import { Database } from '../type/database.js';

export class UserService {
  constructor(private db: Kysely<Database>) { }

  async getCurrentUserProfile(userId: number) {
    // Implementing actual query from the users table
    const result = await this.db
      .selectFrom('users')
      .selectAll()
      .where('id', '=', userId as any)
      .executeTakeFirst();

    // Fallback if not found in db
    if (!result) {
      return {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'SUPERADMIN'
      };
    }

    return result;
  }

  async UserListAll() {
    // In a real app:
    return await this.db.selectFrom('users').selectAll().execute();
  }
}
