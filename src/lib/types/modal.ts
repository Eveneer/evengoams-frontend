export interface ModalFooterButtonType {
	onClick: () => void;
	text: string;
	classes?: string;
    close: boolean;
}

export interface ModalFooterDataType {
	note?: string;
	buttons?: ModalFooterButtonType[];
}

export interface ModalStoreDataType {
	show: boolean;
	component: ConstructorOfATypedSvelteComponent;
	title?: string;
	footer?: ModalFooterDataType;
	params?: Record<string, any>;
}
