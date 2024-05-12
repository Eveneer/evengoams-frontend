<script lang="ts">
	import CustomChart from '../Charts/CustomChart.svelte';

	let data = {
		incomes: [
			261258, 162515, 123375, 219709, 393651, 770, 287607, 32362, 103876, 253986, 288227, 338545
		],
		expenses: [
			-110957, -233528, -145800, -92913, -278033, -194724, -182432, -76272, -193253, -199676,
			-140885, -28092
		],
		flow: [
			186547, 115534, 93109, 219906, 335524, 141569, 246744, 202835, 113457, 167767, 315109, 625562
		]
	};

	const cashFlowData = {
		labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
		datasets: [
			{
				type: 'bar',
				label: 'Income',
				data: data.incomes,
				backgroundColor: 'rgba(113, 205, 205,0.4)',
				borderColor: 'rgba(113, 205, 205,1)',
				borderWidth: 2
			},
			{
				type: 'bar',
				label: 'Expense',
				data: data.expenses,
				backgroundColor: 'rgba(255, 134,159,0.4)',
				borderColor: 'rgba(255 134,159,1)',
				borderWidth: 2
			},
			{
				type: 'line',
				label: 'Cash Flow',
				data: data.flow,
				fill: false,
				borderWidth: 2,
				borderColor: 'rgba(0,0,0,1)'
			}
		]
	};
</script>

<div class="card w-[60%] h-[40vh] flex flex-row justify-center">
	<CustomChart data={cashFlowData} />
</div>
