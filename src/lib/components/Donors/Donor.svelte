<script lang="ts">
	import type { DonorType } from '$lib/types/donors';
	import CollapsibleRow from '../CollapsibleRow/CollapsibleRow.svelte';

	export let donor: DonorType;
</script>

<CollapsibleRow>
	<div slot="row">
		<span class="flex-1 my-auto line-clamp-1 text-left">{donor.name}</span>
		<span class="flex-1 font-mono my-auto">
			{donor.phone ?? 'N/A'}
		</span>
		<span class="flex-1 my-auto">
			{donor.occupation ?? 'N/A'}
		</span>
	</div>

	<div class="flex flex-row flex-wrap w-full" slot="hidden-content">
		<span class="text-left w-[50%] my-1">Occupation: {donor.occupation ?? 'N/A'}</span>
		<span class="text-left w-[50%] my-1">Company: {donor.company ?? 'N/A'}</span>
		<span class="text-left w-[50%] my-1">Phone: {donor.phone ?? 'N/A'}</span>
		<span class="text-left w-[50%] my-1">Email: {donor.email ?? 'N/A'}</span>
		<span class="text-left w-full my-1">Address: {donor.address ?? 'N/A'}</span>
	</div>
</CollapsibleRow>
