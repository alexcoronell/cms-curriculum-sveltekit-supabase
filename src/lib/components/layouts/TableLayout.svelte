<script lang="ts">
	import CircleButton from '$components/ui/buttons/CircleButton.svelte';
	import Button from '$lib/components/ui/buttons/Button.svelte';
	import ButtonBack from '$lib/components/ui/buttons/ButtonBack.svelte';
	import SelectLimit from '$components/ui/form/SelectLimit.svelte';
	import CircleButtonBack from '$lib/components/ui/buttons/CircleButtonBack.svelte';
	import type { Writable } from 'svelte/store';
	export let colums: string[] = [];
	export let limit: Writable<number>;
	export let optionsSelect: { value: string | number | null; label: string }[] = [];
	export let refreshFunction: () => Promise<void>;
</script>

<div class="TableLayout">
	<div class="TableLayout__header">
		<div class="TableLayout__actions">
			<CircleButton classes="md:h-fit lg:hidden" actionButton="add" />
			<CircleButton
				classes="md:h-fit lg:hidden"
				actionButton="refresh"
				on:click={refreshFunction}
			/>
			<Button classes="md:h-fit max-lg:hidden w-[120px]" variant="primary">Add</Button>
			<Button classes="md:h-fit max-lg:hidden w-[120px]" variant="secondary">Refresh</Button>
			<CircleButtonBack classes="md:h-fit md:hidden" />
		</div>
		<div class="TableLayout__navigation">
			<SelectLimit
				name="itemsPerPage"
				limitStore={limit}
				classes="max-w-[150px]"
				{refreshFunction}
				{optionsSelect}
			/>
			<ButtonBack classes="max-md:hidden w-[120px]" />
		</div>
	</div>
	<div class="TableLayout__content">
		<table>
			<thead>
				<tr>
					{#each colums as colum}
						<td>{colum}</td>
					{/each}
					<td>Actions</td>
				</tr>
			</thead>
			<tbody>
				<slot />
			</tbody>
		</table>
	</div>
	<div class="TableLayout__pagination">Pagination</div>
</div>

<style>
	.TableLayout {
		@apply w-full py-0;
	}
	.TableLayout__header {
		@apply grid w-full grid-cols-2 gap-0;
	}
	.TableLayout__actions {
		@apply gap-3 md:flex md:justify-start;
	}
	.TableLayout__navigation {
		@apply gap-3 md:flex md:justify-end;
	}

	.TableLayout__content {
		@apply mb-6 w-full overflow-hidden rounded-xl p-3;
	}

	.TableLayout__pagination {
		@apply flex items-center justify-center rounded-xl border border-primary py-3;
	}
</style>
