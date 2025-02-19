<script lang="ts">
	import type { Study } from '$models/Study.interface';
	export let study: Study;
	const { title, institute, place, since, until, current } = study;
</script>

<article class="StudyItem special-shadow">
	<h3>{title}</h3>
	<div class="StudyItem__details">
		<h5>Institute: {institute}</h5>
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
</article>

<style>
	.StudyItem {
		@apply flex h-full w-full flex-col items-center justify-between gap-3 p-3 pb-6 max-lg:border max-lg:border-primary/50 max-md:max-w-[400px] sm:p-6 lg:bg-backgroundsecondary;
	}

	.StudyItem h3 {
		@apply mb-3 text-2xl;
	}

	.StudyItem__details {
		@apply w-full bg-background px-7 py-4;
	}

	.StudyItem__details > h5 {
		@apply mb-3 text-left text-lg text-white/80;
	}

	.StudyItem__details > ul {
		@apply list-disc text-white/50;
	}
</style>
