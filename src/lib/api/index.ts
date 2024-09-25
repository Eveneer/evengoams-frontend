export const backendUrl: string = import.meta.env.PUBLIC_BACKEND_URL;

export type ApiRequestMethods = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export interface ApiCallParam {
	method: ApiRequestMethods;
	body?: Record<string, any>;
	headers?: Record<string, string>;
	endpoint: string;
}

export interface ParameterisationParam {
	route: string;
	params: Record<string, string | number>;
}

export interface SearchParam {
	perPage?: number;
	searchTerm?: string | number;
	route?: string;
}

export interface ApiValidationError {
    message: string,
    errors: Record<string, string[]>;
}

export const parameterizeRoute = ({ route, params }: ParameterisationParam): string => {
	for (let key in params) route.replace(`{${key}}`, `${params[key]}`);

	return route;
};

const prependBaseUrl = (endpoint: string): string => {
	if (endpoint.startsWith(backendUrl)) return endpoint;

	return `${backendUrl}${!endpoint.startsWith('/') ? '/' : ''}${endpoint}`;
};

export const apiCall = async ({
	method,
	body = {},
	endpoint,
	headers = {}
}: ApiCallParam): Promise<any> => {
	headers['Content-Type'] = 'application/json';

	try {
		const response = await fetch(prependBaseUrl(endpoint), {
			method,
			body: JSON.stringify(body),
			headers
		});

		return await response.json();
	} catch (error: any) {
        
        if (Object.hasOwn(error, 'message') && Object.hasOwn(error, 'errors')) {
            return error;
        } else if (error instanceof Error) {
			return error.message;
		} else {
			return 'An unexpected error occured';
		}
	}
};
