<script lang="ts">
    import { fade } from "svelte/transition";

    /* Components */
    import MajesticonsClose from "$components/ui/icons/MajesticonsClose.svelte";

    /* Model */
    import type { ExperienceFunction } from "$models/Experience.interface";

    export let functions: ExperienceFunction[]
    let isVisibleModal = false
</script>

<div class="ExperienceFunctions">
    <button class="btn btn-primary" on:click={() => isVisibleModal = true}>Functions</button>
    {#if isVisibleModal}
        <div class="ExperienceFunctions__modal" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
            <div class="ExperienceFunctions__box">
                <div class="ExperienceFunctions__content">
                    <div class="ExperienceFunctions__closeHeader">
                        <button on:click={() => isVisibleModal = false}><MajesticonsClose classes="w-8 h-8" /></button>
                    </div>
                    <h4>Functions</h4>
                    <div class="ExperienceFunctions__details">
                        <ul>
                            {#each functions as item}
                                <li>
                                    <p>{item.functionDetail}</p>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <div class="ExperienceFunctions__closeFooter">
                        <button class="btn btn-primary" on:click={() => isVisibleModal = false}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .ExperienceFunctions__modal {
  @apply fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70 px-2 transition-opacity delay-500 duration-500;
}

.ExperienceFunctions__box {
    @apply flex items-center justify-center h-full overflow-y-auto max-h-[90vh];
}

.ExperienceFunctions__content {
    @apply bg-backgroundsecondary p-4 relative max-w-[450px] md:max-w-[500px];
}

.ExperienceFunctions__closeHeader {
    @apply text-right;
}

.ExperienceFunctions__content h4 {
    @apply text-center;
}

.ExperienceFunctions__details {
    @apply p-6;
}

.ExperienceFunctions__details > ul {
    @apply list-disc;
}

.ExperienceFunctions__details > ul > li {
    @apply mb-3;
}

.ExperienceFunctions__closeFooter {
    @apply w-full text-center pb-3;
}
</style>