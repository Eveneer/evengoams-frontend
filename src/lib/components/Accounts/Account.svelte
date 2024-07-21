<script lang="ts">
	import type { AccountType } from '$lib/types/accounts';
	import { tzStampToReadableDateTime } from '$lib/utils';
	import CollapsibleRow from '../CollapsibleRow/CollapsibleRow.svelte';
	import DataPoint from '../CollapsibleRow/DataPoint.svelte';

	export let account: AccountType;
</script>

<CollapsibleRow>
	<div slot="row">
		<span class="font-mono my-auto w-[40px]">{account.type}</span>
		<span class="flex-1 my-auto line-clamp-1 text-left">{account.name}</span>
		<span
			class="font-mono inline-block !mr-auto my-auto {account.balance > 0
				? 'text-teal-600'
				: 'text-orange-600'}"
		>
			{account.balance}
		</span>
	</div>

	<div class="flex flex-row flex-wrap w-full justify-between" slot="hidden-content">
		<DataPoint label="Opening Date" data={tzStampToReadableDateTime(account.created_at)} />
	</div>
</CollapsibleRow>
