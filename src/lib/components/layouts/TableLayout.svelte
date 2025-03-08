<script lang="ts">
	import CircleButton from '$components/ui/buttons/CircleButton.svelte';
	import Button from '$lib/components/ui/buttons/Button.svelte';
	import ButtonBack from '$lib/components/ui/buttons/ButtonBack.svelte';
	import Select from '$lib/components/ui/form/Select.svelte';
	import CircleButtonBack from '$lib/components/ui/buttons/CircleButtonBack.svelte';
	const itemsPerPageOptions = [
		{ value: '5', label: '5' },
		{ value: '10', label: '10' },
		{ value: '25', label: '25' },
		{ value: '50', label: '50' },
		{ value: '100', label: '100' },
		{ value: null, label: 'All' }
	];
	export let colums: string[] = []
</script>

<div class="TableLayout">
	<div class="TableLayout__header">
		<div class="TableLayout__actions">
			<CircleButton classes="md:h-fit lg:hidden" actionButton="add" />
			<CircleButton classes="md:h-fit lg:hidden" actionButton="refresh" />
			<Button classes="md:h-fit max-lg:hidden w-[120px]" variant="primary">Add</Button>
			<Button classes="md:h-fit max-lg:hidden w-[120px]" variant="secondary">Refresh</Button>
			<CircleButtonBack classes="md:h-fit md:hidden" />
		</div>
		<div class="TableLayout__navigation">
			<Select
				optionsSelect={itemsPerPageOptions}
				name="itemsPerPage"
				label="Items per page"
				value="5"
				classes="max-w-[150px]"
			/>
			<ButtonBack classes="max-md:hidden w-[120px]" />
		</div>
	</div>
	<div class="TableLayout__content">
		<table>
			<thead>
				<tr>
					{#each colums as colum }
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
		@apply w-full p-3 mb-6 overflow-hidden rounded-xl;
	}

	.TableLayout__pagination {
		@apply flex items-center justify-center rounded-xl border border-primary py-3;
	}
</style>
