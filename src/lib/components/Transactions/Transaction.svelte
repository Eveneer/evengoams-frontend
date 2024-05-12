<script lang="ts">
	import type { TransactionType } from '$lib/types/transactions';
	import { parseDate } from '$lib/utils';
	import CollapsibleRow from '../CollapsibleRow/CollapsibleRow.svelte';

	export let transaction: TransactionType;
</script>

<CollapsibleRow>
	<div slot="row">
		<span class="font-mono my-auto">{parseDate(transaction.date)}</span>
		<span class="flex-1 my-auto line-clamp-1 text-left">{transaction.note}</span>
		<span
			class="font-mono my-auto {transaction.type === 'income'
				? 'text-teal-600'
				: 'text-orange-600'}">{transaction.amount}</span
		>
	</div>

	<div class="flex flex-row flex-wrap w-full" slot="hidden-content">
		<span class="text-left w-[50%]">Created By: {transaction.author.name}</span>
		<div class="w-full flex flex-row gap-1 flex-wrap mt-4">
			<h3 class="w-full text-left border-b-2 border-gray-500">Tags</h3>
			{#each transaction.tags as tag}
				<span class="bg-blue-200 rounded-full px-2 py-1">{tag.name}</span>
			{/each}
		</div>
	</div>
</CollapsibleRow>
