<script lang="ts">
	import type { NavItemType } from '$lib/types/nav';
	import SideNavItem from '$lib/components/Nav/SideNav/SideNavItem.svelte';
	import autoAnimate from '@formkit/auto-animate';

	export let item: NavItemType;
	export let indent: number = 0;

	let isActive: boolean = false;

	const toggleActive = () => (isActive = !isActive);
</script>

{#if item.type === 'dropdown'}
	<div class="flex flex-col gap-3 {isActive ? 'max-h-[200px]' : 'max-h-[42px]'}">
		<button
			type="button"
			on:click={toggleActive}
			class="{!isActive
				? 'flex flex-row gap-3 rounded-2xl p-2 bg-blue-500 hover:bg-cyan-500 text-white'
				: 'flex flex-row gap-3 rounded-none p-2 border-b-2 border-gray-500'} cursor-pointer"
		>
			<span>{item.label}</span>
		</button>

		<div
			class="flex flex-col gap-1"
			style="margin-left: {(indent + 1) * 20}px; width: calc(100% - {(indent + 1) * 20}px);"
			use:autoAnimate
		>
			{#if item.subitems && isActive}
				{#each item.subitems as subItem (subItem)}
					<SideNavItem item={subItem} indent={indent + 1} />
				{/each}
			{/if}
		</div>
	</div>
{:else}
	<a
		href={item.type === 'link' ? item.href : '/#'}
		class="flex flex-row gap-3 rounded-2xl p-2 bg-blue-500 hover:bg-cyan-500 text-white"
	>
		<span>{item.label}</span>
	</a>
{/if}
