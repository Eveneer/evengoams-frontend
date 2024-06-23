<script lang="ts">
	import CloseIcon from '$lib/assets/icons/CloseIcon.svelte';
	import { modalStore } from '$lib/stores';

	import type { ModalStoreDataType } from '$lib/types/modal';
	import { onMount } from 'svelte';

	let modalData: ModalStoreDataType | undefined;

	modalStore.subscribe((m) => {
		modalData = m;
	});

	onMount(() => {
		console.log(modalData);
	});

	const closeModal = () => {
		modalStore.set(undefined);
	};
</script>

<div
	class="fixed overflow-hidden bg-black/30 w-full h-screen z-50 flex flex-col justify-center {modalData
		? 'top-0 left-0 w-[100vw] h-[100vh]'
		: 'left-[50vw] top-[50vh] !w-[0vw] !h-[0vh] rounded-2xl'}"
>
	<div class="mx-auto relative">
		<button
			class="border-2 rounded-full hover:rotate-90 absolute top-[-15px] right-[-15px] z-10 border-rose-400 bg-rose-100"
			type="button"
			on:click={closeModal}
		>
			<CloseIcon classes="fill-rose-400" size={30} />
		</button>
		<svelte:component this={modalData?.component} {...modalData?.params} />
	</div>
</div>
