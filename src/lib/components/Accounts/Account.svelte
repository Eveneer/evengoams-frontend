<script lang="ts">
	import type { AccountType } from '$lib/types/accounts';
	import { tzStampToReadableDateTime } from '$lib/utils';
	import CollapsibleRow from '../CollapsibleRow/CollapsibleRow.svelte';

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

	<div class="flex flex-col w-full" slot="hidden-content">
		<span class="text-left">Account Open on: {tzStampToReadableDateTime(account.created_at)}</span>
	</div>
</CollapsibleRow>
<!-- <div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
	<span class="font-mono my-auto w-[40px]">{account.type}</span>
	<span class="flex-1 my-auto line-clamp-1">{account.name}</span>
	<span class="font-mono my-auto {account.balance > 0 ? 'text-teal-600' : 'text-orange-600'}"
		>{account.balance}</span
	>
	<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
</div> -->
