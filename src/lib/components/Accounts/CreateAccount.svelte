<script lang="ts">
	import LineInput from '../Inputs/LineInput.svelte';
	import NumberInput from '../Inputs/NumberInput.svelte';
	import RadioInput from '../Inputs/RadioInput.svelte';
</script>

<div class="relative bg-slate-300 rounded-2xl min-w-[500px]">
	<div class="card flex flex-col gap-5 sticky top-[20px]">
		<h3 class="text-center w-full p-2 bg-white rounded-full">Add Account</h3>

		<LineInput id="account_name" label="Account Name" callback={(s) => {}} />

		<NumberInput id="account_balance" label="Initial Balance" callback={(n) => {}} />

		<RadioInput label="Account Type" callback={(s) => {}} options={['Cash', 'Bank', 'Mobile']} />
	</div>
</div>
