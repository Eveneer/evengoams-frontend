import type { DonorType } from "./donors";
import type { TagType } from "./tags";
import type { UserType } from "./users";
import type { VendorType } from "./vendors";

export interface TransactionType {
    id: string;
    date: string;
    amount: number;
    author_id: string;
    author: UserType;
    type: 'income' | 'expense';
    concernable_type: string | null;
    concernable_id: string | null;
    concern: DonorType | VendorType | null;
    parent_id: string | null;
    parents: TransactionType[] | null;
    note: string | null;
    tag_ids: string[];
    tags: TagType[];
    is_last: boolean;
    created_at: string;
    updated_at: string;
}
