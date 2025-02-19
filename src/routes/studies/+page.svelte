<script lang="ts">
	import type { PageData } from './$types';
	import type { Study } from '$models/Study.interface';

	import PublicPagesLayout from '$components/shared/PublicPagesLayout.svelte';
	import StudyItem from '$components/shared/StudyItem.svelte';

	export let data: PageData;
	const { studies } = data as { studies: Study[] };
	const title = 'Studies';
</script>

<PublicPagesLayout {title}>
	<div class="Studies">
		{#each studies as study}
			<StudyItem {study} />
		{/each}
	</div>
</PublicPagesLayout>

<style>
	.Studies {
		@apply grid justify-center gap-6 md:grid-cols-2 xl:grid-cols-3;
	}
</style>
