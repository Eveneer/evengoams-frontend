<script lang="ts">
	import DateInput from '../Inputs/DateInput.svelte';
	import NumberInput from '../Inputs/NumberInput.svelte';
	import RadioInput from '../Inputs/RadioInput.svelte';
	import SearchInput from '../Inputs/SearchInput.svelte';
	import TagsInput from '../Inputs/TagsInput.svelte';
	import TextInput from '../Inputs/TextInput.svelte';
</script>

<div class="bg-slate-300 rounded-2xl relative">
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
			<RadioInput label="Transaction Type" callback={(s) => {}} options={['Income', 'Expense']} />
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
			<SearchInput
				id="transaction_category"
				label="Transaction Category"
				searchCallback={async () => []}
				callback={(s) => {}}
			/>
		</div>
		<div class="flex flex-row gap-5">
			<TagsInput id="transaction_tags" label="Transaction Tags" callback={(s) => {}} />
		</div>
	</div>
</div>
