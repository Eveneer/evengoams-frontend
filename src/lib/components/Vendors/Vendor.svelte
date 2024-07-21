<script lang="ts">
	import type { VendorType } from '$lib/types/vendors';
	import CollapsibleRow from '../CollapsibleRow/CollapsibleRow.svelte';

	export let vendor: VendorType;
</script>

<CollapsibleRow>
	<div slot="row">
		<span class="flex-1 my-auto line-clamp-1 text-left">{vendor.name}</span>
		<span class="flex-1 font-mono my-auto">
			{vendor.type ?? 'N/A'}
		</span>
	</div>

	<div class="flex flex-row flex-wrap w-full justify-between" slot="hidden-content">
		<h3 class="w-full border-b-2 border-gray-500 text-left">Contacts</h3>
		<div class="flex flex-row flex-wrap gap-1 mt-2.5">
			{#each vendor.contacts as c}
				<span class="bg-blue-200 rounded-full px-2 py-1">{c}</span>
			{/each}
		</div>
		<div class="w-full flex flex-row gap-1 flex-wrap mt-4 justify-end">
			{#each vendor.tag_ids as t}
				<span class="bg-blue-200 rounded-full px-2.5 py-0.5 border-[1.5px] border-blue-400">
					{t}
				</span>
			{/each}
		</div>
	</div>
</CollapsibleRow>
