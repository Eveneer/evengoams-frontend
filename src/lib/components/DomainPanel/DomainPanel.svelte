<script lang="ts">
	import AddIcon from '$lib/assets/icons/AddIcon.svelte';
	import { modalStore } from '$lib/stores';
	import type { ModalFooterButtonType } from '$lib/types/modal';
	import Pagination from '../Pagination/Pagination.svelte';

	export let paginationData;
	export let modalComponent: ConstructorOfATypedSvelteComponent;
	export let modalTitle: string | undefined = undefined;
	export let modalButtons: ModalFooterButtonType[] | undefined = undefined;
	export let modalFooterNote: string | undefined = undefined;

	const setModalComponent = () => {
		modalStore.set({
			show: true,
			component: modalComponent,
			title: modalTitle,
			footer: {
				buttons: modalButtons,
				note: modalFooterNote
			}
		});
	};
</script>

<div class="card flex flex-col gap-5">
	<input type="text" name="" id="" placeholder="Search..." class="w-full search" />
	<div class="mx-auto flex flex-col xl:flex-row gap-5 justify-between w-full">
		<div class="mx-auto xl:mx-0 my-auto">
			<Pagination {paginationData} />
		</div>
		<button class="btn btn-primary" type="button" on:click={setModalComponent}>
			<AddIcon size={25} />
		</button>
	</div>
</div>
