<script lang="ts">
	export let size: number = 48;
	export let classes: string = 'fill-gray-600 dark:fill-gray-200';
	export let direction: 'left' | 'right' | 'up' | 'down' = 'right';
	$: rotate =
		direction === 'right'
			? 'rotate-180'
			: direction === 'up'
			? 'rotate-90'
			: direction === 'down'
			? '-rotate-90'
			: '';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 -960 960 960"
	class={`transit inline-block ${rotate} ${classes}`}
	height={`${size}`}
	width={`${size}`}
>
    <path d="M240-240v-480h80v480h-80Zm440 0L440-480l240-240 56 56-184 184 184 184-56 56Z"/>
</svg>
