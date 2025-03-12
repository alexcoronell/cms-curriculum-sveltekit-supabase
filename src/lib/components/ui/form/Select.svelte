<script lang="ts">
	import type { InvalidField } from '$lib/core/interfaces/InvalidField.interface';

	export let label: string = '';
	export let name: string = '';
	export let optionsSelect: { value: string | number | null; label: string }[] = [];
	export let classes: string = '';
	export let value: string | number | null = null;
	export let validator: (() => any) | undefined = undefined;
	export let invalidField: InvalidField = { invalid: false, message: '' };

	const classesToUse = `formgroup ${classes}`.trim();
</script>

<div class={classesToUse}>
	<label for={name}>
		<select
			{name}
			id={name}
			bind:value
			class="w-full"
			on:change={validator}
			on:keydown={validator}
			on:blur={validator}
		>
			{#each optionsSelect as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
		<span>{label}</span>
	</label>
	{#if invalidField.invalid}
		<p class="errorMessage">{invalidField.message}</p>
	{/if}
</div>
