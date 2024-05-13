<script lang="ts">
	import type { NavItemType } from '$lib/types/nav';
	import ChevronIcon from '$lib/assets/icons/ChevronIcon.svelte';
	import autoAnimate from '@formkit/auto-animate';

	export let item: NavItemType;
	export let isActive: boolean = false;
</script>

<a
	href={item.type === 'link' ? item.href : '/#'}
	class=" {isActive
		? 'delay-300 bg-blue-500 text-white'
		: 'card border-transparent hover:bg-teal-300'} rounded-2xl px-5 !py-3 flex flex-row justify-between group transit min-h-[58px]"
	use:autoAnimate
>
	<span class="my-auto">{item.label}</span>
	{#if !isActive}
		<ChevronIcon
			classes="my-auto {isActive ? 'mr-0' : 'mr-5 group-hover:mr-0 '}"
			size={30}
			direction="right"
		/>
	{/if}
</a>
