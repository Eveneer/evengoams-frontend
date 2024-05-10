import { searchResultDisplayKeys } from '../constants';
import type { SearchResultType } from '../types/search';

export const ucfirst = (s: string) => s[0].toUpperCase() + s.slice(1);

// {/* @ts-expect-error */}
export const searchResultName = (r: SearchResultType) => r.data[searchResultDisplayKeys[r.type]];

export const clickOutside = (node: Node) => {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};

export const getValueFromEvent = (event: Event) => {
	const target: HTMLInputElement = event.target as HTMLInputElement;

	if (target) return target.value;
	return '';
};

export const parseDate = (date: string) => {
	const parts: string[] = date.split('-');
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	return `${parts[2]} ${months[parseInt(parts[1])]} ${parts[0]}`;
};
