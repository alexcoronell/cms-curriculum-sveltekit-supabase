<script lang="ts">
	import type { Training } from '$models/Training.interface';
	import { monthToText } from '$helpers/monthToText.helper';
	export let training: Training;
	const { title, englishTitle, institute, year, month, image } = training;
</script>

<article class="TrainingItem">
	<div class="TrainingItem__imageArea">
		<img src={image} alt={`${title} image`} />
	</div>
	<div class="TrainingItem__details">
		<div>
			<h3>{englishTitle}</h3>
			<p>{institute.name}</p>
		</div>
		<time datetime={`${year}-${month}`}>
			<p>
				{monthToText(month as number)}
				{year}
			</p>
		</time>
	</div>
</article>

<style>
	.TrainingItem {
		@apply flex h-full w-full flex-col justify-between p-3 max-lg:border max-lg:border-primary/50 max-md:max-w-[400px] lg:bg-backgroundsecondary;
	}

	.TrainingItem__imageArea {
		@apply relative mx-auto h-[253px] w-full max-w-[326px] grow-0 md:h-[256px] md:max-w-[330px] lg:h-[344px] lg:max-w-[440px] xl:h-[271px] xl:max-w-[350px];
	}

	.TrainingItem__details {
		@apply flex w-full grow flex-col justify-between py-2;
	}

	.TrainingItem__details h3 {
		@apply text-lg;
	}

	.TrainingItem__details p {
		@apply pb-4 text-base text-white/80;
	}

	.TrainingItem__details time p {
		@apply mb-[-1rem] mt-auto w-full text-right text-sm font-light text-white/75;
	}

	.TrainingItem__details h3,
	.TrainingItem__details p,
	.TrainingItem__details time {
		@apply w-full text-center md:text-left;
	}
</style>
