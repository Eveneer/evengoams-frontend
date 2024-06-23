<script lang="ts">
	import AddIcon from '$lib/assets/icons/AddIcon.svelte';
	import { modalStore } from '$lib/stores';
	import Pagination from '../Pagination/Pagination.svelte';

	export let paginationData;
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
		<div class="mx-auto xl:mx-0 my-auto">
			<Pagination {paginationData} />
		</div>
		<button class="btn" type="button" on:click={setModalComponent}>
			<AddIcon size={25} />
		</button>
	</div>
</div>
