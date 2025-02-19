<script lang="ts">
	import SkillItem from './SkillItem.svelte';
	import Button from '$lib/components/ui/buttons/Button.svelte';
	import type { Work } from '$models/Work.interface';
	export let work: Work;
	const { id, title, url, repoUrl, originRepo, publicRepo, image, order, status, technologies } =
		work;
	const skills = technologies.split(',');
</script>

<article class="WorkItem">
	<div class="WorkItem__imageArea">
		<img src={image} alt={`${title} image`} />
	</div>
	<div class="WorkItem__details">
		<div class="WorkItem__titleArea">
			<h3>{title}</h3>
			<p>Status: {status}</p>
		</div>
		<div class="WorkItem__technologies">
			{#each skills as skill}
				<SkillItem skill={skill.trim()} />
			{/each}
		</div>
		<div class="WorkItem__actions">
			{#if url}
				<a href={url} target="_blank" rel="noopener noreferrer">
					<Button variant="primary" classes="min-w-[140px]">Visit</Button>
				</a>
			{/if}
			{#if repoUrl}
				<a href={repoUrl} target="_blank" rel="noopener noreferrer">
					<Button variant="primary" classes="min-w-[140px]">Visit Repository</Button>
				</a>
			{/if}
		</div>
	</div>
</article>

<style>
	.WorkItem {
		@apply flex h-full flex-col overflow-hidden p-1 pb-6 max-lg:border max-lg:border-primary/50 sm:p-6 lg:bg-backgroundsecondary;
	}

	.WorkItem__imageArea {
		@apply relative mx-auto flex h-[238px] w-[340px] grow-0 items-center justify-center sm:h-[352px] sm:w-[518px] lg:h-[295px] lg:w-[420px] xl:h-[352px] xl:w-[524px];
	}

	.WorkItem__details {
		@apply flex grow flex-col items-center justify-between gap-y-6 p-1;
	}

	.WorkItem__titleArea {
		@apply grow-0 py-1;
	}

	.WorkItem__titleArea h3 {
		@apply mb-0 text-center;
	}

	.WorkItem__titleArea p {
		@apply text-center text-base font-light text-white/80;
	}

	.WorkItem__technologies {
		@apply flex grow flex-wrap justify-center gap-3;
	}

	.WorkItem__actions {
		@apply mt-auto flex grow-0 items-center justify-center gap-6 py-1 pt-3;
	}
</style>
