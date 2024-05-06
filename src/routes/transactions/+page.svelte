<script lang="ts">
	import ChevronIcon from '$lib/assets/icons/ChevronIcon.svelte';
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import Transaction from '$lib/components/Transactions/Transaction.svelte';
	import transactions from './sample-transactions.json';

	console.log(transactions);

	const paginationData = {
		total: 50,
		per_page: 15,
		current_page: 2,
		last_page: 4,
		first_page_url: 'http://laravel.app?page=1',
		last_page_url: 'http://laravel.app?page=4',
		next_page_url: 'http://laravel.app?page=2',
		prev_page_url: 'http://laravel.app?page=1',
		path: 'http://laravel.app',
		from: 1,
		to: 15,
		data: [
			{
				// Record...
			},
			{
				// Record...
			}
		]
	};
</script>

<div class="flex flex-row gap-5">
	<div class="w-[60%] flex flex-col gap-5 relative">
		<div class="sticky top-[20px] bg-slate-300 rounded-2xl">
			<div class="card !p-3 flex flex-row justify-between">
				<Pagination {paginationData} />
				<input type="text" name="" id="" placeholder="Search..." class="w-[40%] search" />
			</div>
		</div>

		{#each transactions as transaction}
			<Transaction {transaction} />
		{/each}
		<!-- <div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
			<span class="font-mono my-auto">01 Apr 2024</span>
			<span class="flex-1 my-auto line-clamp-1">Purpose of the transaction</span>
			<span class="font-mono my-auto text-orange-600">13,200</span>
			<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
		</div>

		<div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
			<span class="font-mono my-auto">01 Apr 2024</span>
			<span class="flex-1 my-auto line-clamp-1">Purpose of the transaction</span>
			<span class="font-mono my-auto text-teal-600">13,200</span>
			<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
		</div>

		<div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
			<span class="font-mono my-auto">01 Apr 2024</span>
			<span class="flex-1 my-auto line-clamp-1">Purpose of the transaction</span>
			<span class="font-mono my-auto text-orange-600">13,200</span>
			<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
		</div>

		<div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
			<span class="font-mono my-auto">01 Apr 2024</span>
			<span class="flex-1 my-auto line-clamp-1">Purpose of the transaction</span>
			<span class="font-mono my-auto text-teal-600">13,200</span>
			<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
		</div>

		<div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
			<span class="font-mono my-auto">01 Apr 2024</span>
			<span class="flex-1 my-auto line-clamp-1">Purpose of the transaction</span>
			<span class="font-mono my-auto text-orange-600">13,200</span>
			<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
		</div>

		<div class="card flex flex-row justify-between gap-5 text-[0.8rem]">
			<span class="font-mono my-auto">01 Apr 2024</span>
			<span class="flex-1 my-auto line-clamp-1">Purpose of the transaction</span>
			<span class="font-mono my-auto text-teal-600">13,200</span>
			<span class="my-auto"><ChevronIcon direction="right" size={20} classes="fill-black" /></span>
		</div> -->
	</div>
	<div class="w-[40%] relative">
		<div class="card flex flex-col gap-5 sticky top-[20px]">
			<h3 class="text-center">Add Transction</h3>
		</div>
	</div>
</div>
