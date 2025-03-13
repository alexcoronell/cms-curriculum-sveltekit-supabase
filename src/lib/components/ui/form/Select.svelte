<script lang="ts">
	import type { InvalidField } from '$lib/core/interfaces/InvalidField.interface';
	import type { OptionSelect } from '$lib/core/types/OptionSelect.type';

	export let label: string = '';
	export let name: string = '';
	export let optionsSelect: OptionSelect[] | string[] = [];
	export let classes: string = '';
	export let value: string | number | null = null;
	export let onChange: (() => any) | undefined = undefined;
	export let validator: (() => any) | undefined = undefined;
	export let invalidField: InvalidField = { invalid: false, message: '' };

	const classesToUse = `formgroup ${classes}`.trim();

	let finalOptions: OptionSelect[] = [];

	if (Array.isArray(optionsSelect) && optionsSelect.every(option => typeof option === 'string')) {
		const options: string[] = optionsSelect;
		finalOptions = options.map((item: string) => ({
			value: item,
			label: item
		}));
	} else {
		finalOptions = optionsSelect as OptionSelect[];
	}

	
</script>

<div class={classesToUse}>
	<label for={name}>
		<select
			{name}
			id={name}
			bind:value
			class="w-full"
			on:change={onChange}
			on:keydown={validator}
			on:blur={validator}
		>
			<option value={null} class="opacity-50" disabled>Select an option</option>
			{#each finalOptions as item	}
				<option value={item.value}>{item.label}</option>
			{/each}
		</select>
		<span>{label}</span>
	</label>
	{#if invalidField.invalid}
		<p class="errorMessage">{invalidField.message}</p>
	{/if}
</div>
