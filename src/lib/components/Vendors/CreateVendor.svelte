<script lang="ts">
	import LineInput from '../Inputs/LineInput.svelte';
	import RadioInput from '../Inputs/RadioInput.svelte';
	import TagsInput from '../Inputs/TagsInput.svelte';
</script>

<div class="flex flex-col gap-5">
	<LineInput id="vendor_name" label="Vendor Name" callback={(s) => {}} />

	<TagsInput id="vendor_tags" label="Vendor Tags" callback={(s) => {}} />

	<RadioInput label="Account Type" callback={(s) => {}} options={['Service', 'Product']} />
</div>
