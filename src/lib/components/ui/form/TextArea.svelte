<script lang="ts">
	export let label: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let classes: string = '';

	const classesToUse = `formgroup ${classes}`.trim();
</script>

<div class={classesToUse}>
	<label for={name}>
		<textarea {name} id={name} {placeholder} bind:value></textarea>
		<span>{label}</span>
	</label>
</div>
