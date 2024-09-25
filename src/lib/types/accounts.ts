export interface AccountFieldsType {
	name: string;
	type: 'Cash' | 'Bank' | 'Mobile';
	balance: number;
	details: Record<string, any> | Record<string, any>[];
}

export interface AccountType extends AccountFieldsType {
	id: string;
	created_at: string;
	updated_at: string;
}
