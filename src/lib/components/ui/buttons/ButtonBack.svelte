<script lang="ts">
    import Button from '$lib/components/ui/buttons/Button.svelte';
    export let classes: string = 'w-full';
</script>

<a href="/admin" class="ButtonBack">
    <Button type="button" variant="light" {classes}>Back</Button>
</a>