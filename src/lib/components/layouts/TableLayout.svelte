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
	export let pages: number = 0;
	export let currentPage: number = 1;
	export let totalItems: number = 0;
	export let onFirstPage: () => void;
	export let onPreviousPage: () => void;
	export let onNextPage: () => void;
	export let onLastPage: () => void;
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
		<table class="TableLayout__table">
			<thead>
				<tr>
					{#each colums as colum}
						<th>{colum}</th>
					{/each}
					<th class="TableLayout__rowActions">Actions</th>
				</tr>
			</thead>
			<tbody>
				<slot />
			</tbody>
		</table>
	</div>
	<div class="TableLayout__pagination">
		<span class="TableLayout__totalItems">TotalItems: {totalItems}</span>
		<button disabled={currentPage === 1} on:click={onFirstPage}>First Page</button>
		<button disabled={currentPage === 1} on:click={onPreviousPage}>Previous</button>
		<span class="TableLayout__currentPage">{currentPage}</span>
		<button disabled={currentPage === pages} on:click={onNextPage}>Next</button>
		<button disabled={currentPage === pages} on:click={onLastPage}>Last Page</button>
		<span class="TableLayout__totalPages">TotalPages: {pages}</span>
	</div>
</div>

<style>
	.TableLayout {
		@apply min-w-full py-0;
	}

	/* .TableLayout__table {
		@apply border border-primary/50;
	} */

	.TableLayout__table thead {
		@apply border-b border-primary/50 w-full;
	}

	.TableLayout__table th {
		@apply py-3 px-3 text-primary;
	}
	.TableLayout__header {
		@apply grid w-full grid-cols-2 gap-0;
	}

	.TableLayout__header th {
		@apply min-w-[75px];
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
		@apply relative flex items-center justify-center rounded-xl border border-primary py-3 gap-3;
	}

	.TableLayout__pagination button:disabled {
		@apply opacity-50;
	}

	.TableLayout__currentPage {
		@apply font-bold mx-3;
	}

	.TableLayout__totalItems {
		@apply absolute left-3;
	}

	.TableLayout__totalPages {
		@apply absolute right-3;
	}

	.TableLayout td {
		@apply px-3 border;
	}
</style>
