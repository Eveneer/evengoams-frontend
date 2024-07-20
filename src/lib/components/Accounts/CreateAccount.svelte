<script lang="ts">
	import LineInput from '../Inputs/LineInput.svelte';
	import NumberInput from '../Inputs/NumberInput.svelte';
	import RadioInput from '../Inputs/RadioInput.svelte';
</script>

<div class="flex flex-col gap-5">
	<LineInput id="account_name" label="Account Name" callback={(s) => {}} />

	<NumberInput id="account_balance" label="Initial Balance" callback={(n) => {}} />

	<RadioInput label="Account Type" callback={(s) => {}} options={['Cash', 'Bank', 'Mobile']} />
</div>
