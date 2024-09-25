<script lang="ts">
	import LineInput from '../Inputs/LineInput.svelte';
	import DateInput from '../Inputs/DateInput.svelte';
</script>

<div class="flex flex-col gap-5">
	<div class="flex flex-col gap-5">

		<LineInput id="employee_name" label="Employee Name" callback={(s) => {}} />

		<div class="flex flex-row gap-3">
			<div class="flex-1">
				<LineInput id="employee_email" label="Employee Email" callback={(s) => {}} />
			</div>

			<div class="flex-1">
				<LineInput id="employee_phone" label="Employee Phone" callback={(s) => {}} />
			</div>
		</div>

		<div class="flex flex-row gap-3">
			<div class="flex-1">
				<LineInput id="employee_salary" label="Employee Salary" callback={(s) => {}} />
			</div>
			<div class="flex-1">
				<LineInput id="employee_role" label="Employee Role" callback={(s) => {}} />
			</div>
		</div>

		<div class="w-[40%]">
			<DateInput
				id="hire_date"
				label="Hire Date"
				min="2024-05-01"
				max="2050-06-05"
				callback={(s) => {}}
			/>
		</div>
	</div>
</div>
