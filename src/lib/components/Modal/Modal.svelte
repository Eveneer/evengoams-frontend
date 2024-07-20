<script lang="ts">
	import CloseIcon from '$lib/assets/icons/CloseIcon.svelte';
	import { modalStore } from '$lib/stores';
	import type { ModalStoreDataType } from '$lib/types/modal';

	let modalData: ModalStoreDataType | undefined;

	modalStore.subscribe((m) => {
		modalData = m;
	});

	const closeModal = () => {
		if (modalData) modalData.show = false;
		modalStore.set(modalData);

		setTimeout(() => {
			modalStore.set(undefined);
		}, 500);
	};

	$: modalClasses = modalData?.show
		? 'top-0 left-0 w-[100vw] h-[100vh]'
		: 'left-[50vw] top-[50vh] !w-[0vw] !h-[0vh] rounded-2xl';
</script>

<div
	class="fixed overflow-hidden bg-black/30 w-full h-screen z-50 flex flex-col justify-center {modalClasses}"
>
	<div class="mx-auto relative rounded-2xl bg-slate-300 max-w-[600px]">
		<button
			class="absolute top-[-15px] right-[-15px] z-10 cancel-btn"
			type="button"
			on:click={closeModal}
		>
			<CloseIcon classes="fill-rose-400" size={30} />
		</button>
		<div class="flex flex-col relative bg-white/50 rounded-2xl shadow-lg overflow-hidden">
			{#if modalData?.title}
				<div class="h-[55px]">
					<div class="flex flex-col justify-center h-[53px] px-5">
						<h3 class="text-[1.25rem] line-clamp-1 text-gray-600">
							{modalData.title}
						</h3>
					</div>
					<div class="border-b-2 border-gray-400 mt-auto" />
				</div>
			{/if}
			<div class="p-5 bg-gray-400/15 max-h-[70vh] overflow-y-auto nsb">
				<svelte:component this={modalData?.component} {...modalData?.params} />
			</div>
			{#if modalData?.footer?.buttons || modalData?.footer?.note}
				<div class="h-[55px]">
					<div class="border-b-2 border-gray-400" />
					<div class="flex flex-row justify-between gap-5 px-5 py-2.5 h-[53px]">
						<p class="text-[0.7rem] text-gray-500 italic my-auto line-clamp-2 max-w-[60%]">
							{modalData?.footer?.note ?? ''}
						</p>
						{#if modalData?.footer?.buttons && modalData?.footer.buttons.length}
							<div class="my-auto">
								{#each modalData.footer.buttons as button}
									<button
										class="btn btn-sm {button.classes}"
										type="button"
										on:click={() => {
											button.onClick();

											if (button.close) closeModal();
										}}
									>
										{button.text}
									</button>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
