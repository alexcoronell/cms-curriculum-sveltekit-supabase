<script lang="ts">
	import SocialMediaItem from './SocialMediaItem.svelte';
	import type { SocialMedia } from '$models/SocialMedia.interface';
	export let socialMedia: SocialMedia[];
</script>

<article class="SocialMedia special-shadow bg-backgroundsecondary">
	{#each socialMedia as item}
		<SocialMediaItem {item} />
	{/each}
</article>

<style>
	.SocialMedia {
		@apply mx-auto flex h-[470px] w-full flex-col justify-center overflow-y-auto rounded-3xl p-10 max-lg:max-w-[400px] lg:h-[500px];
	}
</style>
