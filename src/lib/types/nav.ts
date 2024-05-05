export interface NavItemType {
	type: 'link' | 'action' | 'dropdown';
	label: string;
	icon?: ConstructorOfATypedSvelteComponent;
	href?: string;
	callback?: () => void;
	subitems?: NavItemType[];
}
