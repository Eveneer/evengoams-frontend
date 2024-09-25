import type { AccountFieldsType, AccountType } from '$lib/types/accounts';
import { apiCall, parameterizeRoute, type SearchParam } from '..';

export const routes = {
	search: '/accounts',
	read: '/accounts/{id}',
	create: '/accounts',
	update: '/accounts/{id}',
	trash: '/accounts/{id}/trash',
	restore: '/accounts/{id}/restore'
};

export const getAccount = async (id: string): Promise<AccountType | null> => {
	let account: AccountType = (await apiCall({
		method: 'GET',
		endpoint: parameterizeRoute({ route: routes.read, params: { id: id } }),
		body: { id }
	})) as AccountType;

	return account;
};

export const getAccounts = async ({ route, perPage = 10, searchTerm }: SearchParam) => {
	const body = { per_page: perPage, search_term: searchTerm };

	if (route) return await apiCall({ endpoint: route, method: 'GET', body });

	return await apiCall({ endpoint: routes.search, method: 'GET', body });
};

export const createAccount = async (data: AccountFieldsType) => {
	return await apiCall({ method: 'POST', endpoint: routes.create, body: data });
};

export const updateAccount = async (id: string, data: AccountFieldsType) => {
	return await apiCall({
		method: 'POST',
		endpoint: parameterizeRoute({ route: routes.trash, params: { id: id } }),
		body: { id, ...data }
	});
};

export const trashAccount = async (id: string) => {
	return await apiCall({
		method: 'POST',
		endpoint: parameterizeRoute({ route: routes.trash, params: { id: id } }),
		body: { id }
	});
};

export const restoreAccount = async (id: string) => {
	return await apiCall({
		method: 'POST',
		endpoint: parameterizeRoute({ route: routes.trash, params: { id: id } }),
		body: { id }
	});
};
