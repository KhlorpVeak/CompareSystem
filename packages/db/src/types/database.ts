import type { UserTable } from './tables/user.table.js';

export interface Database {
  users: UserTable;
}
