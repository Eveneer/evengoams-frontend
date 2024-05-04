export interface AccountType {
	id: string;
	name: string;
	type: 'Cash' | 'Bank' | 'Mobile';
	balance: number;
	details: {};
	created_at: string;
	updated_at: string;
}
