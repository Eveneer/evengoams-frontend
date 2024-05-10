<script lang="ts">
	import ChevronIcon from '$lib/assets/icons/ChevronIcon.svelte';
	import type { AccountType } from '$lib/types/accounts';

	export let account: AccountType;
</script>

<div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
	<span class="font-mono my-auto w-[40px]">{account.type}</span>
	<span class="flex-1 my-auto line-clamp-1">{account.name}</span>
	<span
		class="font-mono my-auto {account.balance > 0 ? 'text-teal-600' : 'text-orange-600'}"
		>{account.balance}</span
	>
	<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
</div>
