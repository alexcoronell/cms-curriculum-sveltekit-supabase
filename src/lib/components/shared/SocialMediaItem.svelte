<script lang="ts">
    import BlxGithub from "$components/ui/icons/BlxGithub.svelte";
    import BlxLinkedin from "$components/ui/icons/BlxLinkedin.svelte";
    import BlxGmail from "$components/ui/icons/BlxGmail.svelte";
    import BlxWhatsapp from "$components/ui/icons/BlxWhatsapp.svelte";
    import FlowbiteEnvelopeOutline from "$components/ui/icons/FlowbiteEnvelopeOutline.svelte";
    import IconoirWww from "$components/ui/icons/IconoirWww.svelte";

    /* Models */
    import type { SocialMedia } from "$models/SocialMedia.interface";

    export let item: SocialMedia
    const { id, name, url, show, icon } = item

    let plus = ''
    let finalLink = ''
    const numbers = url.replace(/[^0-9]/g, "").length;
    
    if(url.includes('@')) {
        finalLink = `mailto:${url}`
    } else if(numbers >= 10) {
        const finalNumber = url.replace('+', '')
        finalLink = `https://wa.me/${finalNumber}?text=I%20need%20more%20information`;
        plus = "+";
    } else {
        finalLink = url
    }

    const FinalIcon = () => {
        switch (name) {
            case "Github": return BlxGithub;
            case "Gmail": return BlxGmail;
            case "Linkedin": return BlxLinkedin;
            case "Whatsapp": return BlxWhatsapp;
            case "Email": return FlowbiteEnvelopeOutline;
            case "www": return IconoirWww;
            default: return IconoirWww;
        }
    }

    const IconComponent = FinalIcon();
</script>

{#if show}
    <a href={finalLink} target="_blank" rel="noopener noreferrer" class="SocialMediaItem">
        <IconComponent classes="size-11" />
        <p>
            {plus}{url.replace('https://', '').replace('www.', '')}
        </p>
    </a>
{/if}

<style>
    .SocialMediaItem {
        @apply mb-5 flex items-center gap-x-5 hover:text-primary;
    }

    .SocialMediaItem p {
        @apply text-xs sm:text-sm md:text-base;
    }
</style>
