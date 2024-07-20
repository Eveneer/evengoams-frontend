<script lang="ts">
	import type { NavItemType } from '$lib/types/nav';
	import ChevronIcon from '$lib/assets/icons/ChevronIcon.svelte';
	import autoAnimate from '@formkit/auto-animate';

	export let item: NavItemType;
	export let isActive: boolean = false;

	$: navItemClasses = isActive
		? 'bg-blue-500 text-white rounded-[5rem]'
		: 'card border-transparent hover:bg-teal-300';
</script>

<a
	href={item.type === 'link' ? item.href : '/#'}
	class="{navItemClasses} rounded-2xl !pl-3 !pr-0 !py-2.5 flex flex-row justify-between group min-h-[50px] shadow-xl"
	use:autoAnimate
>
	<span class="my-auto">{item.label}</span>
	{#if !isActive}
		<ChevronIcon
			classes="my-auto {isActive ? 'mr-0' : 'mr-3 group-hover:mr-0 '}"
			size={30}
			direction="right"
		/>
	{/if}
</a>
