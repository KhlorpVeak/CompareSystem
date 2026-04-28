import { Generated, ColumnType } from 'kysely';
export interface UserTable {
    id: Generated<number>;
    email: string;
    name: string;
    phoneNumber?: string;
    password: string;
    role: 'SUPERADMIN' | 'ADMIN' | 'USER';
    type?: number;
    socialId?: string;
    socialToken?: string;
    loginType?: number;
    point?: number;
    isLoginWithSocial?: boolean;
    updatedBy?: number;
    lastChatAt?: Date;
    main_user?: number;
    disabled?: number;
    created_at: ColumnType<Date, string | undefined, never>;
    updated_at: ColumnType<Date, string | undefined, never>;
}
//# sourceMappingURL=user.table.d.ts.map