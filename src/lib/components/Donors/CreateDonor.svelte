<script lang="ts">
	import LineInput from '../Inputs/LineInput.svelte';
	import TextInput from '../Inputs/TextInput.svelte';
</script>

<div class="flex flex-col gap-5">
	<LineInput id="donor_name" label="Donor Name" callback={(s) => {}} />

	<div class="flex flex-row gap-3">
		<div class="flex-1">
			<LineInput id="donor_email" label="Donor Email" callback={(s) => {}} />
		</div>

		<div class="flex-1">
			<LineInput id="donor_phone" label="Donor Phone" callback={(s) => {}} />
		</div>
	</div>

	<TextInput id="donor_address" label="Donor Address" callback={(s) => {}} />

	<div class="flex flex-row gap-3">
		<div class="flex-1">
			<LineInput id="donor_occupation" label="Donor Occupation" callback={(s) => {}} />
		</div>
		<div class="flex-1">
			<LineInput id="donor_title" label="Donor Title" callback={(s) => {}} />
		</div>
	</div>

	<LineInput id="donor_company" label="Donor Company" callback={(s) => {}} />
</div>
