<script lang="ts">
	import { Doughnut } from 'svelte-chartjs';
	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

	const data = {
		labels: ['Salary', 'Cleaning', 'Water', 'Electricity', 'Misc'],
		datasets: [
			{
				data: [300, 50, 100, 40, 120],
				backgroundColor: ['#F7464A8F', '#46BFBD8F', '#FDB45C8F', '#949FB18F', '#4D53608F'],
				borderColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
				hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
			}
		]
	};

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<div class="card w-full h-[35vh] flex flex-row justify-center">
	<Doughnut {data} options={{ responsive: true }} />
</div>
