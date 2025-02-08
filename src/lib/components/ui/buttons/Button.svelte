<script lang="ts">
    export let classes: string = '';
    export let type: "button" | "submit" | "reset" | null | undefined = 'button';
    export let variant: "primary" |"secondary" | "light" = "primary";
    export let disabled: boolean = false;
    const classesToUse = `btn btn--${variant} ${classes}`.trim();
</script>

<button type="{type}" class="{classesToUse}" disabled="{disabled}">
    <slot />
</button>

<style>
    .btn {
        @apply hover:shadow-md p-3 rounded-xl;
    }

    .btn--primary {
        @apply bg-primary text-background hover:shadow-primary disabled:shadow-none;
    }

    .btn--secondary {
        @apply border border-primary bg-background text-primary hover:bg-primary hover:text-background disabled:bg-background disabled:text-primary;
    }

    .btn--light {
        @apply bg-transparent text-primary border border-transparent hover:border-primary/70 disabled:border-transparent;
    }

    .btn:disabled {
        @apply opacity-50 cursor-not-allowed;
    }
</style>