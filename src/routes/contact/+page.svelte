<script lang="ts">
    import PublicPagesLayout from "$components/shared/PublicPagesLayout.svelte";
    import ContactForm from "$components/shared/ContactForm.svelte";
    import SocialMedia from "$components/shared/SocialMedia.svelte";
    const title = 'Contact';
</script>

<PublicPagesLayout {title}>
    <div class="Contact">
        <ContactForm />
        <SocialMedia />
    </div>
</PublicPagesLayout>

<style>
    .Contact {
        @apply lg:grid lg:grid-cols-2 gap-x-10 h-full items-center;
    }
</style>