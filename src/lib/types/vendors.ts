export interface VendorType {
	id: string;
	name: string;
	type: 'service' | 'product';
	tag_ids: string[];
	contacts: string[];
	created_at: string;
	updated_at: string;
}
