import { Generated, ColumnType } from 'kysely';

// Represents a row in the `users` table
export interface UsersTable {
  id: Generated<number>;
  name: string;
  email: string;
  password: string;
  role: 'SUPERADMIN' | 'ADMIN' | 'USER';
  created_at: ColumnType<Date, string | undefined, never>;
  updated_at: ColumnType<Date, string | undefined, never>;
}

// The top-level Database interface maps table names to their row interfaces.
// Add more tables here as your schema grows.
export interface Database {
  users: UsersTable;
}
