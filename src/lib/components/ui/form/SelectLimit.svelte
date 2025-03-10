<script lang="ts">
	import type { Writable } from 'svelte/store';
	export let name: string = '';
	export let optionsSelect: { value: string | number | null; label: string }[] = [];
	export let classes: string = '';

	const classesToUse = `formgroup ${classes}`.trim();
	let limit: number = 0;
	export let limitStore: Writable<number>;
	export let refreshFunction: () => Promise<void>;
	limitStore.subscribe((value) => (limit = value));
	const updateLimit = () => {
		limitStore.set(limit);
		console.log(limit, 'refresh');
		refreshFunction();
	};
</script>

<div class={classesToUse}>
	<label for={name}>
		<select {name} id={name} bind:value={limit} class="w-full" on:change={() => updateLimit()}>
			{#each optionsSelect as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
		<span>Items per page</span>
	</label>
</div>
