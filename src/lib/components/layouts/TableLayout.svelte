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
</script>

<div class="TableLayout">
	<div class="TableLayout__header">
		<div class="TableLayout__actions">
			<CircleButton classes="md:h-fit lg:hidden" actionButton="add" />
			<CircleButton classes="md:h-fit lg:hidden" actionButton="refresh" />
			<Button classes="md:h-fit max-lg:hidden w-[120px]" variant="primary">Add</Button>
			<Button classes="md:h-fit max-lg:hidden w-[120px]" variant="secondary">Refresh</Button>
            <CircleButtonBack  classes="md:h-fit md:hidden" />
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
	<slot />
	<div class="TableLayout__pagination">
        Pagination
    </div>
</div>

<style>
	.TableLayout {
        @apply w-full py-0;
	}
    .TableLayout__header {
        @apply w-full grid grid-cols-2 gap-0;
    }
    .TableLayout__actions {
        @apply md:flex md:justify-start gap-3;
    }
    .TableLayout__navigation {
        @apply md:flex md:justify-end gap-3;
    }

    .TableLayout__pagination {
        @apply py-3 rounded-xl border border-primary flex items-center justify-center;
    }
    
</style>
