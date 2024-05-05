<script lang="ts">
	import SettingsIcon from '$lib/assets/icons/SettingsIcon.svelte';
	import AuthIcon from '$lib/assets/icons/AuthIcon.svelte';
	import LogoutIcon from '$lib/assets/icons/LogoutIcon.svelte';
</script>

<div class="py-2 px-5 bg-white/50 rounded-3xl flex md:flex-row justify-between shadow-xl">
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
