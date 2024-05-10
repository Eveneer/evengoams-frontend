<script lang="ts">
	import CloseIcon from '$lib/assets/icons/CloseIcon.svelte';
	import autoAnimate from '@formkit/auto-animate';

	export let id: string;
	export let name: string = id;
	export let label: string;
	export let placeholder: string = label;
	export let callback: (s: string[]) => void;

	let tags: string[] = [];

	const removeTag = (i: number) => {
		tags.splice(i, 1);
		tags = tags;

		callback(tags);
	};

	const updateTag = (event: Event) => {
		const keyPressed: string = (event as KeyboardEvent).key;
		const tag: string = (event.target as HTMLInputElement).value;

		if (keyPressed === 'Enter') {
			tags[tags.length] = tag;
			callback(tags);

			(event.target as HTMLInputElement).value = '';
		}
	};
</script>

<div class="input-container" use:autoAnimate>
	<input type="text" {name} {id} {placeholder} on:keyup={updateTag} />
	<label for={id}>{label}</label>
	{#if tags.length}
		<div class="flex flex-row gap-2 mt-4" use:autoAnimate>
			{#each tags as tag, i (i)}
				<button class="tag-btn" type="button" on:click={() => removeTag(i)}>
					<span>{tag}</span>
					<CloseIcon classes="fill-white my-auto rounded-full mx-[4px] my-[4px]" size={18} />
				</button>
			{/each}
		</div>
	{/if}
</div>
