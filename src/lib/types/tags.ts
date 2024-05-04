export interface TagType {
    id: string;
    name: string;
    key: string;
    model: 'transaction' | 'donor' | 'vendor';
    created_at: string;
    updated_at: string;
}
