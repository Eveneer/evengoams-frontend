import type { NavItemType } from "$lib/types/nav";

export const sideNavItems: NavItemType[] = [
    {
        label: 'Dashboard',
        type: 'link',
        href: '/'
    },
    {
        label: 'Transactions',
        type: 'dropdown',
        subitems: [
            { label: 'Add Transaction', type: 'action', callback: () => {} },
            { label: 'View Transactions', type: 'link', href: '/transactions' }
        ]
    },
    {
        label: 'Accounts',
        type: 'dropdown',
        subitems: [
            { label: 'Add Account', type: 'action', callback: () => {} },
            { label: 'View Accounts', type: 'link', href: '/accounts' }
        ]
    },
    {
        label: 'Donors',
        type: 'dropdown',
        subitems: [
            { label: 'Add Donor', type: 'action', callback: () => {} },
            { label: 'View Donors', type: 'link', href: '/donors' }
        ]
    },
    {
        label: 'Vendors',
        type: 'dropdown',
        subitems: [
            { label: 'Add Vendor', type: 'action', callback: () => {} },
            { label: 'View Vendors', type: 'link', href: '/vendors' }
        ]
    },
    {
        label: 'Pledges',
        type: 'dropdown',
        subitems: [
            { label: 'Add Pledge', type: 'action', callback: () => {} },
            { label: 'View Pledges', type: 'link', href: '/pledges' }
        ]
    },
    {
        label: 'Staff',
        type: 'dropdown',
        subitems: [
            { label: 'Add Staff', type: 'action', callback: () => {} },
            { label: 'View Staff', type: 'link', href: '/staff' }
        ]
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
]

