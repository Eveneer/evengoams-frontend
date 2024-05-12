<script lang="ts">
	import DashboardCashFlowChart from '$lib/components/Dashboard/DashboardCashFlowChart.svelte';
	import DashboardExpenseBreakdownChart from '$lib/components/Dashboard/DashboardExpenseBreakdownChart.svelte';
</script>

<div class="flex flex-col gap-5 xl:gap-10">
	<div class="flex flex-row gap-5 xl:gap-10">
		<DashboardCashFlowChart />

		<div class="card w-[40%] flex flex-col justify-center">
			<ul class="list-disc mx-auto">
				<li class="font-mono text-[0.8rem]">Upcoming pledges</li>
			</ul>
		</div>
	</div>
	<div class="flex flex-row gap-5 xl:gap-10">
		<div class="card w-full h-[35vh] flex flex-col justify-center">
			<ul class="list-disc mx-auto">
				<li class="font-mono text-[0.8rem]">Current Projects</li>
			</ul>
		</div>
		<div class="card w-full h-[35vh] flex flex-col justify-center">
			<ul class="list-disc mx-auto">
				<li class="font-mono text-[0.8rem]">Fiscal Year stats</li>
			</ul>
		</div>
		<DashboardExpenseBreakdownChart />
	</div>
</div>
