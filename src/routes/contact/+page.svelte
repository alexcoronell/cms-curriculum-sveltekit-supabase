<script lang="ts">
	import type { PageData } from './$types';

    /* Components */
    import PublicPagesLayout from "$components/shared/PublicPagesLayout.svelte";
    import ContactForm from "$components/shared/ContactForm.svelte";
    import SocialMediaComponent from "$components/shared/SocialMedia.svelte";

    /* Models */
    import type { SocialMedia } from '$models/SocialMedia.interface';

    export let data: PageData;
    const { socialMedia } = data as { socialMedia: SocialMedia[] };
    const title = 'Contact';
</script>

<PublicPagesLayout {title}>
    <div class="Contact">
        <ContactForm />
        <SocialMediaComponent {socialMedia} />
    </div>
</PublicPagesLayout>

<style>
    .Contact {
        @apply lg:grid lg:grid-cols-2 gap-x-10 h-full items-center;
    }
</style>