<script lang="ts">
	import '../app.css';
	import SettingsIcon from '$lib/assets/icons/SettingsIcon.svelte';
	import AuthIcon from '$lib/assets/icons/AuthIcon.svelte';
	import LogoutIcon from '$lib/assets/icons/LogoutIcon.svelte';
</script>

<main class="p-5 flex flex-col gap-5 min-h-screen w-full max-w-[1200px] mx-auto">
	<div class="py-2 px-5 bg-slate-500/50 rounded-3xl flex md:flex-row justify-between">
		<div class="flex flex-row gap-2">
			<img
				src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
				alt="Logo"
				class="h-[60px]"
			/>
			<h3 class="my-auto text-[1.5rem]">Evengoams</h3>
		</div>
		<div class="flex flex-row gap-5">
			<a href="/#" class="flex flex-row gap-2">
				<SettingsIcon classes="my-auto" size={24} />
				<span class="my-auto">Configs</span>
			</a>
			<a href="/#" class="flex flex-row gap-2">
				<AuthIcon classes="my-auto" size={24} />
				<span class="my-auto">Account</span>
			</a>
			<a href="/#" class="flex flex-row gap-2">
				<LogoutIcon classes="my-auto" size={24} />
				<span class="my-auto">Logout</span>
			</a>
		</div>
	</div>
	<div class="flex flex-row gap-5 w-full max-w-[1200px] mx-auto">
		<div class="flex flex-col gap-5 w-[25%] rounded-3xl min-h-[82vh] bg-slate-500/30 p-5">
			<a href="/#" class="flex flex-row gap-3 rounded-2xl p-2 border border-gray-500 hover:bg-gray-500 hover:text-white ease-linear transition-all duration-300">
				<span>Dashboard</span>
			</a>
			<a href="/#" class="flex flex-row gap-3 rounded-2xl p-2 border border-gray-500 hover:bg-gray-500 hover:text-white ease-linear transition-all duration-300">
				<span>Transactions</span>
			</a>
			<a href="/#" class="flex flex-row gap-3 rounded-2xl p-2 border border-gray-500 hover:bg-gray-500 hover:text-white ease-linear transition-all duration-300">
				<span>Accounts</span>
			</a>
			<a href="/#" class="flex flex-row gap-3 rounded-2xl p-2 border border-gray-500 hover:bg-gray-500 hover:text-white ease-linear transition-all duration-300">
				<span>Donors</span>
			</a>
			<a href="/#" class="flex flex-row gap-3 rounded-2xl p-2 border border-gray-500 hover:bg-gray-500 hover:text-white ease-linear transition-all duration-300">
				<span>Pledges</span>
			</a>
			<a href="/#" class="flex flex-row gap-3 rounded-2xl p-2 border border-gray-500 hover:bg-gray-500 hover:text-white ease-linear transition-all duration-300">
				<span>Staff</span>
			</a>
		</div>
		<div class="w-[75%] rounded-2xl min-h-[82vh] border-2 border-black p-5">
			<slot />
		</div>
	</div>
</main>
