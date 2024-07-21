<script lang="ts">
	import ChevronIcon from '$lib/assets/icons/ChevronIcon.svelte';
	import autoAnimate from '@formkit/auto-animate';

	let isOpen: boolean = false;

	const toggleOpen = () => (isOpen = !isOpen);
</script>

<button
	class="card text-[0.8rem] cursor-pointer flex flex-col"
	on:click={toggleOpen}
	use:autoAnimate
>
	<div class="collapsible-row-slot">
		<slot name="row">
			<h1>Primary Content</h1>
		</slot>
		<span class="my-auto">
			<ChevronIcon direction={isOpen ? 'up' : 'right'} size={20} classes="fill-black" />
		</span>
	</div>
	{#if isOpen}
		<div class="w-full overflow-y-auto max-h-[100vh] mt-3 relative">
			<div class="border border-gray-500 mb-3 sticky top-0"></div>
			<slot name="hidden-content">
				<h1>Hidden Content of Row</h1>
			</slot>
		</div>
	{/if}
</button>
