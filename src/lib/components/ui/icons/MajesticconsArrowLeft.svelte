<script lang="ts">
	export let classes: string = '';
	const classesToUse = classes ? classes : 'w-6 h-6';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	class={classesToUse}
	><path
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="m5 12l6-6m-6 6l6 6m-6-6h14"
	/></svg
>
