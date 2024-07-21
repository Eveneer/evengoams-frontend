<script lang="ts">
	import type { DonorType } from '$lib/types/donors';
	import CollapsibleRow from '../CollapsibleRow/CollapsibleRow.svelte';
	import DataPoint from '../CollapsibleRow/DataPoint.svelte';

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

	<div class="flex flex-row flex-wrap w-full justify-between" slot="hidden-content">
		<DataPoint label="Occupation" data={donor.occupation ?? 'N/A'} />
		<DataPoint label="Company" data={donor.company ?? 'N/A'} />
		<DataPoint label="Phone" data={donor.phone ?? 'N/A'} />
		<DataPoint label="Email" data={donor.email ?? 'N/A'} />
		<DataPoint label="Address" data={donor.address ?? 'N/A'} />
	</div>
</CollapsibleRow>
