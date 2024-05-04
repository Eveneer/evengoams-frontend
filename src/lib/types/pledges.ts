import type { DonorType } from './donors';

export interface Pledges {
	id: string;
	donor_id: string;
	donor: DonorType;
	amount: number;
	recurs: string;
	due_date: string;
	created_at: string;
	updated_at: string;
}
