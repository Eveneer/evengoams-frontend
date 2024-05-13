<script lang="ts">
	import DateInput from '../Inputs/DateInput.svelte';
	import NumberInput from '../Inputs/NumberInput.svelte';
	import RadioInput from '../Inputs/RadioInput.svelte';
	import SearchInput from '../Inputs/SearchInput.svelte';
	import TagsInput from '../Inputs/TagsInput.svelte';
	import TextInput from '../Inputs/TextInput.svelte';
</script>

<div class="relative bg-slate-300 rounded-2xl min-w-[500px]">
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
			<div class="w-[60%]">
				<NumberInput id="transaction_amount" label="Transaction Amount" callback={(s) => {}} />
			</div>
		</div>

		<RadioInput label="Transaction Type" callback={(s) => {}} options={['Income', 'Expense']} />

		<div class="flex flex-row gap-5">
			<div class="flex-1">
				<SearchInput
					id="transaction_from"
					label="Payee"
					searchCallback={async () => []}
					callback={(s) => {}}
				/>
			</div>
			<div class="flex-1">
				<SearchInput
					id="transaction_to"
					label="Recipient"
					searchCallback={async () => []}
					callback={(s) => {}}
				/>
			</div>
		</div>

		<TextInput
			id="transaction_note"
			label="Transaction Note"
			placeholder="Note"
			callback={(s) => {}}
		/>

		<SearchInput
			id="transaction_category"
			label="Transaction Category"
			searchCallback={async () => []}
			callback={(s) => {}}
		/>

		<TagsInput id="transaction_tags" label="Transaction Tags" callback={(s) => {}} />
	</div>
</div>
