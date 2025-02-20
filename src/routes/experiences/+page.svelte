<script lang="ts">
	import type { PageData } from './$types';
	import type { Experience } from '$models/Experience.interface';

	import PublicPagesLayout from '$components/shared/PublicPagesLayout.svelte';
	import ExperienceItem from '$components/shared/ExperienceItem.svelte';

	export let data: PageData;
	const { experiences } = data as { experiences: Experience[] };
	const title = 'Experiences';
</script>

<PublicPagesLayout {title}>
	<div class="Experiences">
		{#each experiences as experience}
			<ExperienceItem {experience} />
		{/each}
	</div>
</PublicPagesLayout>

<style>
    .Experiences {
        @apply grid justify-center gap-6 md:grid-cols-2 xl:grid-cols-3;
    }
</style>
