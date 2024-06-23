<script lang="ts">
	import ChevronIcon from '$lib/assets/icons/ChevronIcon.svelte';
	import ExtremeLimitIcon from '$lib/assets/icons/ExtremeLimitIcon.svelte';
	import autoAnimate from '@formkit/auto-animate';

	export let paginationData: Record<string, any>;
</script>

<div class="flex flex-row gap-1 my-auto" use:autoAnimate>
	{#if paginationData.current_page > 1}
		<button class="pagination-btn">
			<ExtremeLimitIcon direction="left" size={20} classes="fill-white mx-auto" />
		</button>
	{/if}

	{#if paginationData.prev_page_url}
		<button class="pagination-btn">
			<ChevronIcon direction="left" size={20} classes="fill-white mx-auto" />
		</button>
	{/if}

	<button class="pagination-btn active">
		<span class="mx-auto text-[0.8rem]">{paginationData.current_page}</span>
	</button>

	{#if paginationData.next_page_url}
		<button class="pagination-btn">
			<ChevronIcon direction="right" size={20} classes="fill-white mx-auto" />
		</button>
	{/if}

	{#if paginationData.current_page < paginationData.last_page}
		<button class="pagination-btn">
			<ExtremeLimitIcon direction="right" size={20} classes="fill-white mx-auto" />
		</button>
	{/if}
</div>
