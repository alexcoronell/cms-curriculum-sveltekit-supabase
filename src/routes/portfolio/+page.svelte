<script lang="ts">
	import type { PageData } from './$types';
	import type { Work } from '$models/Work.interface';

	import PublicPagesLayout from '$components/layouts/PublicPagesLayout.svelte';
	import WorkItem from '$components/shared/WorkItem.svelte';

	export let data: PageData;
	const { works } = data as { works: Work[] };
	const title = 'Portfolio';
</script>

<PublicPagesLayout {title}>
	<div class="Portfolio">
		{#each works as work}
			<WorkItem {work} />
		{/each}
	</div>
</PublicPagesLayout>

<style>
	.Portfolio {
		@apply grid justify-center gap-6 lg:grid-cols-2;
	}
</style>
