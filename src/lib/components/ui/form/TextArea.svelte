<script lang="ts">
	export let label: string = '';
	export let name: string = '';
    export let rows: number = 1;
	export let placeholder: string = '';
	export let value: string = '';
	export let classes: string = '';

	const classesToUse = `formgroup ${classes}`.trim();
</script>

<div class={classesToUse}>
	<label for={name}>
		<textarea {name} id={name} {placeholder} {rows} bind:value></textarea>
		<span>{label}</span>
	</label>
</div>
