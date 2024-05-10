<script lang="ts">
	export let id: string;
	export let name: string = id;
	export let label: string;
	export let min: string = '';
	export let max: string = '';
	export let callback: (value: string) => void;

	const callCallback = (event: Event) => {
		callback((event.target as HTMLInputElement).value);
	};
</script>

<div class="input-container">
	<input type="date" {name} {id} {min} {max} on:change={callCallback} />
	<label for={id}>{label}</label>
</div>
