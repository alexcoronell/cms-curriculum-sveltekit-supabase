<script lang="ts">
	import type { PageData } from './$types';
	import type { Training } from '$models/Training.interface';

	import PublicPagesLayout from '$components/shared/PublicPagesLayout.svelte';
	import TrainingItem from '$components/shared/TrainingItem.svelte';

	export let data: PageData;
	const { trainings } = data as { trainings: Training[] };
	const title = 'Trainings';
</script>

<PublicPagesLayout {title}>
	<div class="Trainings">
		{#each trainings as training}
			<TrainingItem {training} />
		{/each}
	</div>
</PublicPagesLayout>

<style>
	.Trainings {
		@apply grid justify-center gap-6 md:grid-cols-2 xl:grid-cols-3; 
	}
</style>
