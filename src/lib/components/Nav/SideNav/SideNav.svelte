<script lang="ts">
	import SideNavItem from './SideNavItem.svelte';
	import { sideNavItems } from '../nav-items';

    export let pathname: string;
</script>

<div
	class="flex flex-col gap-3 w-[25%] max-w-[300px] mb-auto sticky top-[116px] xl:top-[136px] max-h-[82vh]"
>
	{#each sideNavItems as item (item)}
		<SideNavItem {item} isActive={pathname === item.href} />
	{/each}
</div>
