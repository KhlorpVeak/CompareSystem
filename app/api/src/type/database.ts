import { Generated } from 'kysely';

export interface UsersTable {
  id: Generated<number>;
  name: string;
  email: string;
  role: string;
  created_at: Generated<string>;
}

export interface Database {
  users: UsersTable;
}
