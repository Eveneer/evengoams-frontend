import type { AccountType } from './accounts';
import type { CollectionPointType } from './collection-points';
import type { DonorType } from './donors';
import type { EmployeeType } from './employees';
import type { TransactionType } from './transactions';
import type { UserType } from './users';
import type { VendorType } from './vendors';

export interface SearchResultType {
	type: 'account' | 'collection_point' | 'donor' | 'employee' | 'transaction' | 'user' | 'vendor';
	data:
		| AccountType
		| CollectionPointType
		| DonorType
		| EmployeeType
		| TransactionType
		| UserType
		| VendorType;
}
