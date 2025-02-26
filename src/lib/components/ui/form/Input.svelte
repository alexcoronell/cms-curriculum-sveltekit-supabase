<script lang="ts">
	import type { InvalidField } from '$interfaces/InvalidField.interface';

	export let label: string = '';
	export let name: string = '';
	export let placeholder: string = '';
	export let type: string = 'text';
	export let value: string = '';
	export let validator: (() => any) | undefined = undefined;
	export let invalidField: InvalidField = { invalid: false, message: '' };
	export let classes: string = '';
	export let isReadOnly: boolean = false 

	const classesToUse = `formgroup ${classes}`.trim();
</script>

<div class={classesToUse}>
	<label for={name}>
		<input
			{type}
			{name}
			id={name}
			{placeholder}
			bind:value
			on:blur={validator}
			on:change={validator}
			on:input={validator}
			on:keyup={validator}
			readOnly={isReadOnly}
		/>
		<span>{label}</span>
	</label>
	{#if invalidField.invalid}
		<p class="errorMessage">{invalidField.message}</p>
	{/if}
</div>
