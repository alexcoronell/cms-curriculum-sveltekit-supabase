<script lang="ts">
	import CircleButton from '$components/ui/buttons/CircleButton.svelte';
	import Button from '$lib/components/ui/buttons/Button.svelte';
	import ButtonBack from '$lib/components/ui/buttons/ButtonBack.svelte';
	import SelectLimit from '$components/ui/form/SelectLimit.svelte';
	import CircleButtonBack from '$lib/components/ui/buttons/CircleButtonBack.svelte';
	import MajesticonsChevronLeftLine from '$components/ui/icons/MajesticonsChevronLeftLine.svelte';
	import MajesticonsChevronRightLine from '$components/ui/icons/MajesticonsChevronRightLine.svelte';
	import MajesticonsForwardEndCircleLine from '$components/ui/icons/MajesticonsForwardEndCircleLine.svelte';
	import MajesticonsBackwardStartCircleLine from '$components/ui/icons/MajesticonsBackwardStartCircleLine.svelte';

	import type { Writable } from 'svelte/store';
	export let colums: { classes: string; title: string }[] = [];
	export let limit: Writable<number>;
	export let optionsSelect: { value: string | number | null; label: string }[] = [];
	export let refreshFunction: () => Promise<void>;
	export let pages: number = 0;
	export let createUrl: string = 'create';
	export let currentPage: number = 1;
	export let totalItems: number = 0;
	export let onFirstPage: () => void;
	export let onPreviousPage: () => void;
	export let onNextPage: () => void;
	export let onLastPage: () => void;
</script>

<div class="TableLayout">
	<div class="TableLayout__header">
		<div class="TableLayout__headerActions">
			<a href={createUrl}>
				<CircleButton classes="md:h-fit lg:hidden" actionButton="add" />
				<Button classes="md:h-fit max-lg:hidden w-[120px]" variant="primary">Add</Button>
			</a>
			<CircleButton
				classes="md:h-fit lg:hidden"
				actionButton="refresh"
				on:click={refreshFunction}
			/>
			<Button classes="md:h-fit max-lg:hidden w-[120px]" variant="secondary">Refresh</Button>
			<CircleButtonBack classes="md:h-fit md:hidden" />
		</div>
		<div class="TableLayout__headerNavigation">
			<SelectLimit
				name="itemsPerPage"
				limitStore={limit}
				classes="max-w-[150px] translate-y-3"
				{refreshFunction}
				{optionsSelect}
			/>
			<ButtonBack classes="max-md:hidden w-[120px]" />
		</div>
	</div>
	<div class="TableLayout__content">
		<table class="TableLayout__table">
			<thead class="TableLayout__tableHead">
				<tr>
					{#each colums as colum}
						<th class={colum.classes}>{colum.title}</th>
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
		<div class="TableLayout__paginationButtons">
			<button
				class="TableLayout__paginationButton"
				disabled={currentPage === 1}
				on:click={onFirstPage}
				><MajesticonsBackwardStartCircleLine class="TableLayout__paginationIcon" />
				<span>First Page</span></button
			>
			<button
				class="TableLayout__paginationButton"
				disabled={currentPage === 1}
				on:click={onPreviousPage}
				><MajesticonsChevronLeftLine class="TableLayout__paginationIcon" />
				<span>Previous</span></button
			>
			<span class="TableLayout__currentPage">{currentPage}</span>
			<button
				class="TableLayout__paginationButton"
				disabled={currentPage === pages}
				on:click={onNextPage}
				><span>Next</span><MajesticonsChevronRightLine
					class="TableLayout__paginationIcon"
				/></button
			>
			<button
				class="TableLayout__paginationButton"
				disabled={currentPage === pages}
				on:click={onLastPage}
				><span>Last Page</span><MajesticonsForwardEndCircleLine
					class="TableLayout__paginationIcon"
				/></button
			>
		</div>
		<span class="TableLayout__totalItems">Total Items: {totalItems}</span>
		<span class="TableLayout__totalPages">Total Pages: {pages}</span>
	</div>
</div>

<style>
	.TableLayout {
		@apply min-w-full py-0;
	}

	.TableLayout__header {
		@apply grid w-full grid-cols-2 items-center gap-0;
	}

	.TableLayout__headerActions,
	.TableLayout__headerNavigation {
		@apply flex items-center gap-1;
	}

	.TableLayout__headerNavigation {
		@apply justify-end pb-0 md:flex md:gap-3;
	}

	.TableLayout__content {
		@apply mb-6 w-full overflow-hidden rounded-xl p-3;
	}

	.TableLayout__table {
		@apply w-full;
	}

	.TableLayout__tableHead {
		@apply w-full border-b border-primary/50;
	}

	.TableLayout__tableHead th {
		@apply min-w-[75px] px-3 py-3 text-primary;
	}

	.TableLayout__rowActions {
		@apply flex items-center justify-center;
	}

	.TableLayout__pagination {
		@apply relative rounded-xl border border-primary py-3;
	}

	.TableLayout__paginationButtons {
		@apply relative flex items-center justify-center gap-6;
	}

	.TableLayout__paginationButton {
		@apply flex items-center gap-1;
	}

	.TableLayout__paginationButton span {
		@apply max-xl:hidden;
	}

	.TableLayout__pagination button:disabled {
		@apply opacity-50;
	}

	.TableLayout__currentPage {
		@apply mx-3 font-bold;
	}

	.TableLayout__totalItems,
	.TableLayout__totalPages {
		@apply max-md:mt-6 max-md:inline-block md:absolute md:top-3;
	}

	.TableLayout__totalItems {
		@apply px-3 text-left md:absolute md:left-3;
	}

	.TableLayout__totalPages {
		@apply absolute right-3;
	}

	.TableLayout td {
		@apply border px-3;
	}
</style>
