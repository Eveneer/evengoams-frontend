<script lang="ts">
	export let id: string;
	export let name: string = id;
	export let label: string;
	export let placeholder: string = label;
	export let min: string = '';
	export let max: string = '';
	export let step: string = '';
	export let callback: (value: number) => void;

	const callCallback = (event: Event) => {
		callback(Number((event.target as HTMLInputElement).value));
	};
</script>

<div class="input-container">
	<input type="number" {name} {id} {min} {max} {step} {placeholder} on:change={callCallback} />
	<label for={id}>{label}</label>
</div>
