<script lang="ts">
	import type { EmployeeType } from '$lib/types/employees';
	import CollapsibleRow from '../CollapsibleRow/CollapsibleRow.svelte';
	import DataPoint from '../CollapsibleRow/DataPoint.svelte';

	export let employee: EmployeeType;
</script>

<CollapsibleRow>
	<div slot="row">
		<span class="flex-1 my-auto line-clamp-1 text-left">{employee.name}</span>
		<span class="flex-1 font-mono my-auto">
			{employee.email ?? 'N/A'}
		</span>
		<span class="flex-1 my-auto">
			{employee.role ?? 'N/A'}
		</span>
	</div>

	<div class="flex flex-row flex-wrap w-full justify-between" slot="hidden-content">
		<DataPoint label="Email" data={employee.email ?? 'N/A'} />
		<DataPoint label="Phone" data={employee.phone ?? 'N/A'} />
		<DataPoint label="Position" data={employee.role ?? 'N/A'} />
		<DataPoint label="Salary" data={employee.salary ?? 'N/A'} />
		<DataPoint label="Hire Date" data={employee.hire_date ?? 'N/A'} />
	</div>
</CollapsibleRow>
