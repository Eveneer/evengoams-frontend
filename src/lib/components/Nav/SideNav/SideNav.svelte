<script lang="ts">
	import SideNavItem from './SideNavItem.svelte';
	import { sideNavItems } from '../nav-items';
</script>

<div
	class="flex flex-col gap-3 w-[25%] max-w-[300px] card mb-auto sticky top-[116px] xl:top-[136px] overflow-y-auto max-h-[82vh]"
>
	{#each sideNavItems as item (item)}
		<SideNavItem {item} />
	{/each}
</div>
