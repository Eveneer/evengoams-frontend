<script lang="ts">
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import Transaction from '$lib/components/Transactions/Transaction.svelte';
	import t from './sample-transactions.json';
	import { type TransactionType } from '$lib/types/transactions';
	import DateInput from '$lib/components/Inputs/DateInput.svelte';
	import LineInput from '$lib/components/Inputs/LineInput.svelte';
	import NumberInput from '$lib/components/Inputs/NumberInput.svelte';
	import RadioInput from '$lib/components/Inputs/RadioInput.svelte';
	import SearchInput from '$lib/components/Inputs/SearchInput.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import TagsInput from '$lib/components/Inputs/TagsInput.svelte';

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

	let x: string | number = '';
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
	</div>
	<div class="w-[40%] relative">
		<div class="card flex flex-col gap-5 sticky top-[20px]">
			<h3 class="text-center w-full p-2 bg-white rounded-full">Add Transction</h3>
			<div class="flex flex-row gap-5">
				<div class="w-[40%]">
					<DateInput
						id="transaction_date"
						label="Transaction Date"
						min="2025-05-01"
						max="2024-06-05"
						callback={(s) => {}}
					/>
				</div>
				<div class="w-[60%] flex flex-col gap-0">
					<NumberInput id="transaction_amount" label="Transaction Amount" callback={(s) => {}} />
				</div>
			</div>

			<div class="flex flex-row gap-5 w-full">
				<RadioInput
					label="Transaction Type"
					value={x}
					callback={(s) => {
						x = s;
					}}
					options={['Income', 'Expense']}
				/>
			</div>

			<div class="flex flex-row gap-5">
				<div class="w-[50%] flex flex-col gap-0">
					<SearchInput
						id="transaction_from"
						label="Payee"
						searchCallback={async () => []}
						callback={(s) => {}}
					/>
				</div>
				<div class="w-[50%] flex flex-col gap-0">
					<SearchInput
						id="transaction_to"
						label="Recipient"
						searchCallback={async () => []}
						callback={(s) => {}}
					/>
				</div>
			</div>
			<div class="flex flex-row gap-5">
				<TextInput
					id="transaction_note"
					label="Transaction Note"
					placeholder="Note"
					callback={(s) => {}}
				/>
			</div>
			<div class="flex flex-row gap-5">
				<TagsInput id="transaction_tags" label="Transaction Tags" callback={(s) => {}} />
				<!-- 
                
                placeholder="Note"
                callback={(s) => {}} -->
			</div>
		</div>
	</div>
</div>

<!-- 
$table->json('tag_ids')->nullable();
-->
