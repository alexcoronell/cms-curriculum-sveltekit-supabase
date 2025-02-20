<script lang="ts">
	import type { Experience } from '$models/Experience.interface';

	import ExperienceFunctions from '$components/shared/ExperienceFunctions.svelte';

	export let experience: Experience;
	const { nameBusiness, position, place, since, current, until, functions } = experience;
</script>

<article class="ExperienceItem">
	<h3>{nameBusiness}</h3>
	<div class="ExperienceItem__details">
		<h5>Position: {position}</h5>
		<ul>
			<li>
				<p>Place: {place}</p>
			</li>
			<li>
				<p>Since: {since}</p>
			</li>
			{#if current}
				<li>
					<p>Current</p>
				</li>
			{:else}
				<li>
					<p>Until: {until}</p>
				</li>
			{/if}
		</ul>
	</div>
	{#if functions}
		<ExperienceFunctions {functions} />
	{/if}
</article>

<style>
	.ExperienceItem {
		@apply flex h-full w-full flex-col items-center justify-between gap-6 p-3 pb-6 max-lg:border max-lg:border-primary/50 max-md:max-w-[400px] sm:p-6 lg:bg-backgroundsecondary;
	}

	.ExperienceItem h3 {
		@apply text-xl;
	}

	.ExperienceItem__details {
		@apply w-full grow bg-background px-7 py-4;
	}

	.ExperienceItem__details > h5 {
		@apply mb-3 text-left text-lg text-white/80;
	}

	.ExperienceItem__details > ul {
		@apply list-disc text-white/50;
	}
</style>
