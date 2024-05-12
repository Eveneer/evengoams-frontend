import type { NavItemType } from '$lib/types/nav';

export const sideNavItems: NavItemType[] = [
	{
		label: 'Dashboard',
		type: 'link',
		href: '/'
	},
	{
		label: 'Transactions',
		type: 'link',
		href: '/transactions'
	},
	{
		label: 'Accounts',
		type: 'link',
		href: '/accounts'
	},
	{
		label: 'Donors',
		type: 'link',
		href: '/donors'
	},
	{
		label: 'Vendors',
		type: 'link',
		href: '/vendors'
	},
	{
		label: 'Pledges',
		type: 'link',
		href: '/pledges'
	},
	{
		label: 'Employees',
		type: 'link',
		href: '/employees'
	},
	{
		label: 'Projects',
		type: 'link',
		href: '/projects'
	}
];

export const topNavItems: NavItemType[] = [
	{
		label: 'Dashboard',
		type: 'link',
		href: '/'
	},
	{
		label: 'Configs',
		type: 'link',
		href: '/configs'
	},
	{
		label: 'Logout',
		type: 'action',
		callback: () => {}
	}
];
