<script lang="ts">
	import type { Profile } from '$models/Profile.interface';
	import type { PageData } from './$types';

	export let data: PageData;
	const { firstname, lastname, title, description, image } = data as Profile;
</script>

<main class="Home main">
	<div class="Home__container">
		<div class="Home__imageArea">
			<img src={image} alt={`${firstname} ${lastname} data?.profile image`} />
		</div>
		<div class="Home__details">
			<h1>{firstname} {lastname}</h1>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	</div>
</main>

<style>
	.Home {
		@apply w-full overflow-y-scroll p-4 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:top-0 max-md:h-screen md:h-full;
	}

	.Home__container {
		@apply flex h-full flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:items-center lg:gap-x-12;
	}

	.Home__imageArea {
		@apply relative mx-auto h-[328px] w-[328px] overflow-hidden xl:h-[400px] xl:w-[400px];
	}

	.Home__details {
		@apply lg:col-span-2 lg:pl-6;
	}

	.Home__details > h1 {
		@apply py-3 xl:text-8xl;
	}

	.Home__details > h2 {
		@apply mb-3;
	}

	.Home__details > p {
		@apply text-center leading-7;
	}

	.Home__details > h1,
	.Home__details > h2,
	.Home__details > p {
		@apply lg:text-left;
	}
</style>
