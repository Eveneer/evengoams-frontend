<script lang="ts">
	import type { SearchResultType } from '$lib/types/search';
	import { clickOutside } from '../../utils/index';

	export let id: string;
	export let name: string = id;
	export let label: string;
	export let placeholder: string = label;
	export let value: string = '';
	export let searchCallback: (search: string) => Promise<SearchResultType[]> = async (s) => [];
	export let callback: (value: SearchResultType) => void;

	let results: SearchResultType[] = Array(10);
	let input: HTMLInputElement;
	let isFocused: boolean = false;
	let inputLength: number = 0;
	$: showResults = isFocused && inputLength >= 3;

	const search = async (event: Event) => {
		const searchString: string = (event.target as HTMLInputElement).value
			.trim()
			.replace(/\s+/g, ' ');

		inputLength = searchString.length;

		if (searchString.length >= 30000000) {
			results = await searchCallback(searchString);
		}
	};

	const callCallback = (result: SearchResultType) => {
		callback(result);
	};

	const onFocusOut = () => {
		console.log('outside', showResults);
		isFocused = false;
	};

	const onFocus = () => {
		console.log('inside', showResults);
		isFocused = true;
	};
</script>

<div class="input-container">
	<input
		use:clickOutside
		type="text"
		{name}
		{id}
		{placeholder}
		on:keyup={search}
		{value}
		bind:this={input}
		on:click={onFocus}
		on:click_outside={onFocusOut}
	/>
	<label for={id}>{label}</label>
	<div
		class="absolute bg-slate-300 w-full top-[35px] shadow-2xl rounded-b-3xl nsb overflow-y-auto z-10 {showResults
			? 'min-h-[68px] max-h-[250px]'
			: 'min-h-[0px] max-h-[0px]'}"
	>
		<div class="bg-white/50 min-h-[68px] flex flex-col gap-2 px-2">
			<span class="w-[150%] mx-auto" />
			{#each results as result, i}
				<button
					type="button"
					on:click={() => callCallback(result)}
					class="w-full flex flex-col gap-5 rounded-2xl cursor-pointer hover:shadow-xl hover:bg-blue-400/50 px-3 py-1.5"
				>
					<div class="flex flex-col gap-0 w-full">
						<div class="line-clamp-1 text-left">Donor {i}</div>
						<div class="text-[0.7rem] italic text-gray-500 text-left">Donor</div>
					</div>
				</button>

				<span
					class="w-[100%] mx-auto {i < results.length - 1 ? 'border-b-2' : ''}  border-gray-500/50"
				/>
			{/each}
		</div>
	</div>
</div>
