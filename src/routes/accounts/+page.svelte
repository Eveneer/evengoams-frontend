<script lang="ts">
	import a from './sample-accounts.json';
	import { type AccountType } from '$lib/types/accounts';
	import Account from '$lib/components/Accounts/Account.svelte';
	import DomainPanel from '$lib/components/DomainPanel/DomainPanel.svelte';
	import CreateAccount from '$lib/components/Accounts/CreateAccount.svelte';

	const accounts: AccountType[] = a as AccountType[];

	const paginationData = {
		total: 50,
		per_page: 15,
		current_page: 2,
		last_page: 4,
		first_page_url: 'http://laravel.app?page=1',
		last_page_url: 'http://laravel.app?page=4',
		next_page_url: 'http://laravel.app?page=2',
		prev_page_url: 'http://laravel.app?page=1',
		path: 'http://laravel.app',
		from: 1,
		to: 15,
		data: [
			{
				// Record...
			},
			{
				// Record...
			}
		]
	};
</script>

<div class="flex flex-row gap-5 xl:gap-10">
	<div class="w-[60%] flex flex-col gap-3 relative">
		{#each accounts as account}
			<Account {account} />
		{/each}
	</div>

	<div class="w-[40%] relative">
		<div class="flex flex-col gap-5 xl:gap-10 sticky top-[116px] xl:top-[136px]">
			<DomainPanel {paginationData} domainName="Account" modalComponent={CreateAccount} />

			<div class="flex flex-col gap- h-[40vh] card w-full justify-center">
				<h3 class="text-center">Stats Section</h3>
				<ul class="list-disc mx-auto">
					<li class="font-mono text-[0.8rem]">Data undecided</li>
				</ul>
			</div>
		</div>
	</div>
</div>
