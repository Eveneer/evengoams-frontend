<script lang="ts">
	import '../app.css';
	import SideNav from '$lib/components/Nav/SideNav/SideNav.svelte';
	import TopNav from '$lib/components/Nav/TopNav/TopNav.svelte';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	$: pathname = data.url;
</script>

<main
	class="p-5 xl:p-10 xl:pt-5 flex flex-col gap-5 xl:gap-10 min-h-screen w-full max-w-[1800px] mx-auto relative"
>
	<div
		class="fixed top-0 left-0 w-full h-[90px] bg-gradient-to-b from-slate-800 to-slate-300/50 z-10"
	/>
	<TopNav />
	<div class="flex flex-row gap-5 xl:gap-10 w-full max-w-[1800px] mx-auto relative">
		<SideNav {pathname} />
		{#key pathname}
			<div class="w-full min-h-[82vh] xl:min-h-[80vh]">
				<slot />
			</div>
		{/key}
	</div>
</main>
