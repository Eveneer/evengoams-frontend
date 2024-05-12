import { days, months, searchResultDisplayKeys } from '../constants';
import type { SearchResultType } from '../types/search';

export const ucfirst = (s: string) => s[0].toUpperCase() + s.slice(1);

/* @ts-expect-error */
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

	return `${parts[2]} ${months[parseInt(parts[1])]} ${parts[0]}`;
};

export const tzStampToReadableDateTime = (
	tz: string | Date,
	format: string = 'DD, dd MM yy hh:mm:ss'
) => {
	if (typeof tz === 'string') tz = new Date(tz);

	format = format.replaceAll('yy', `${tz.getFullYear()}`); // year
	format = format.replaceAll('MM', `${months[tz.getMonth()]}`); // month
	format = format.replaceAll('dd', `${tz.getDate() < 10 ? '0' + tz.getDate() : tz.getDate()}`); // date
	format = format.replaceAll('DD', `${days[tz.getDay()]}`); // day
	format = format.replaceAll('hh', `${tz.getHours() < 10 ? '0' + tz.getHours() : tz.getHours()}`); // hours
	format = format.replaceAll(
		'mm',
		`${tz.getMinutes() < 10 ? '0' + tz.getMinutes() : tz.getMinutes()}`
	); // minutes
	format = format.replaceAll(
		'ss',
		`${tz.getSeconds() < 10 ? '0' + tz.getSeconds() : tz.getSeconds()}`
	); // seconds

	return format;
};
