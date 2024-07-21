<script lang="ts">
	import type { TransactionType } from '$lib/types/transactions';
	import { parseDate } from '$lib/utils';
	import CollapsibleRow from '../CollapsibleRow/CollapsibleRow.svelte';
	import DataPoint from '../CollapsibleRow/DataPoint.svelte';

	export let transaction: TransactionType;

	$: amountColor = transaction.type === 'income' ? 'text-teal-600' : 'text-orange-600';
</script>

<CollapsibleRow>
	<div slot="row">
		<span class="font-mono my-auto">{parseDate(transaction.date)}</span>
		<span class="flex-1 my-auto line-clamp-1 text-left">{transaction.note}</span>
		<span class="font-mono my-auto {amountColor}">{transaction.amount}</span>
	</div>

	<div class="flex flex-row flex-wrap w-full justify-between" slot="hidden-content">
		<DataPoint label="Created by" data={transaction.author.name} />
		<div class="w-full flex flex-row gap-1 flex-wrap mt-4 justify-end">
			{#each transaction.tags as tag}
				<span class="bg-blue-200 rounded-full px-2.5 py-0.5 border-[1.5px] border-blue-400">
					{tag.name}
				</span>
			{/each}
		</div>
	</div>
</CollapsibleRow>
