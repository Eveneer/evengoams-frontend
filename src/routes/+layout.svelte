<script lang="ts">
	import '../app.css';
	import SideNav from '$lib/components/Nav/SideNav/SideNav.svelte';
	import TopNav from '$lib/components/Nav/TopNav/TopNav.svelte';
</script>

<main class="p-5 flex flex-col gap-5 min-h-screen w-full max-w-[1800px] mx-auto relative">
	<div
		class="fixed top-0 left-0 w-full h-[100px] bg-gradient-to-b from-slate-800 to-slate-300/50 z-10"
	></div>
	<TopNav />
	<div class="flex flex-row gap-5 w-full max-w-[1800px] mx-auto relative">
		<SideNav />
		<div class="w-full min-h-[82vh]">
			<slot />
		</div>
	</div>
</main>
