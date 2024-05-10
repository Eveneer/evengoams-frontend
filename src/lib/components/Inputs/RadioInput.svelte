<script lang="ts">
	export let label: string;
	export let options: (string | number)[] | Record<string, string | number>;
	export let callback: (value: string | number) => void;
	export let value: string | number = '';

	let opts: Record<string, string | number> = options as Record<string, string | number>;

	if (Array.isArray(options)) {
		opts = {};

		options.forEach((opt) => {
			opts[opt] = opt;
		});

		opts = opts;
	}

	const callCallback = (value: string) => {
		callback(value);
	};
</script>

<div class="input-container">
	<div class="btn-group">
		{#each Object.keys(opts) as k}
			<button
				class={opts[k] === value ? 'active' : ''}
				type="button"
				on:click={() => callCallback(k)}
			>
				{opts[k]}
			</button>
		{/each}
	</div>
	<label for="">{label}</label>
</div>
