<script lang="ts">
	import Transaction from '$lib/components/Transactions/Transaction.svelte';
	import t from './sample-transactions.json';
	import { type TransactionType } from '$lib/types/transactions';
	import DomainPanel from '$lib/components/DomainPanel/DomainPanel.svelte';

	const transactions: TransactionType[] = t as TransactionType[];

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

<div class="flex flex-row gap-5 xl:gap-10">
	<div class="w-[60%] flex flex-col gap-3 relative">
		{#each transactions as transaction}
			<Transaction {transaction} />
		{/each}
	</div>

	<div class="w-[40%] relative">
		<div class="flex flex-col gap-5 xl:gap-10 sticky top-[116px] xl:top-[136px]">
			<DomainPanel {paginationData} domainName="Transaction" />

			<div class="flex flex-col gap-5 h-[40vh] card w-full justify-center">
				<h3 class="text-center">Stats Section</h3>
				<ul class="list-disc mx-auto">
					<li class="font-mono text-[0.8rem]">
						Total income in last x period (filterable by x and period)
					</li>
					<li class="font-mono text-[0.8rem]">
						Total expense in last x period (filterable by x and period)
					</li>
					<li class="font-mono text-[0.8rem]">
						Linear graph showing incomes and expenses (cash flow)
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
