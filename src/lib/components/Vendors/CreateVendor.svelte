<script lang="ts">
	import LineInput from '../Inputs/LineInput.svelte';
	import RadioInput from '../Inputs/RadioInput.svelte';
	import TagsInput from '../Inputs/TagsInput.svelte';
</script>

<div class="relative bg-slate-300 rounded-2xl min-w-[500px]">
	<div class="card flex flex-col gap-5 sticky top-[20px]">
		<h3 class="text-center w-full p-2 bg-white rounded-full">Add Vendor</h3>

		<LineInput id="vendor_name" label="Vendor Name" callback={(s) => {}} />

		<TagsInput id="vendor_tags" label="Vendor Tags" callback={(s) => {}} />

		<RadioInput label="Account Type" callback={(s) => {}} options={['Service', 'Product']} />
	</div>
</div>
