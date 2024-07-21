<script lang="ts">
	export let label: string;
	export let data: string;
</script>

<div class="w-[calc(50%-1.25rem)] min-w-[250px] flex flex-col text-left relative mb-3">
	<p class="text-gray-600 text-[0.6rem] italic border-b-2 border-gray-400">
		{label}
	</p>
	<p class="rounded-lg border-gray-500 w-full">
		{data}
	</p>
</div>
