<script lang="ts">
	import SideNavItem from './SideNavItem.svelte';
	import { sideNavItems } from '../nav-items';
</script>

<div
	class="flex flex-col gap-3 w-[25%] max-w-[300px] rounded-3xl bg-white/50 p-3 mb-auto sticky top-[20px] overflow-y-auto max-h-[82vh] shadow-xl"
>
	{#each sideNavItems as item (item)}
		<SideNavItem {item} />
	{/each}
</div>
