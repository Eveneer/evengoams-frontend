<script lang="ts">
	import { modalStore } from '$lib/stores';
	import Pagination from '../Pagination/Pagination.svelte';

	export let paginationData;
	export let domainName: string;
	export let modalComponent: ConstructorOfATypedSvelteComponent;

	const setModalComponent = () => {
		modalStore.set({
			component: modalComponent
		});
	};
</script>

<div class="card flex flex-col gap-5">
	<input type="text" name="" id="" placeholder="Search..." class="w-full search" />
	<div class="mx-auto flex flex-col xl:flex-row gap-5 justify-between w-full">
		<button class="btn !px-10" type="button" on:click={setModalComponent}>Add {domainName}</button>
		<div class="mx-auto xl:mx-0">
			<Pagination {paginationData} />
		</div>
	</div>
</div>
