export interface UserType {
    id: string;
    name: string;
    email: string;
    email_verified_at: string | null;
    password: string;
    type: 'admin' | 'org_member' | 'donor';
    is_active: boolean;
    created_at: string;
    updated_at: string;
}
