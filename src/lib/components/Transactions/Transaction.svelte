<script lang="ts">
	import ChevronIcon from '$lib/assets/icons/ChevronIcon.svelte';
	import type { TransactionType } from '$lib/types/transactions';
	import { parseDate } from '$lib/utils';

	export let transaction: TransactionType;
</script>

<div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
	<span class="font-mono my-auto">{parseDate(transaction.date)}</span>
	<span class="flex-1 my-auto line-clamp-1">{transaction.note}</span>
	<span
		class="font-mono my-auto {transaction.type === 'income' ? 'text-teal-600' : 'text-orange-600'}"
		>{transaction.amount}</span
	>
	<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
</div>
