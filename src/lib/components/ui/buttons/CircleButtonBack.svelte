<script lang="ts">
    import CircleButton from "./CircleButton.svelte";
    export let classes: string = '';
    const classesToUse = `ButtonBack ${classes}`.trim();
</script>

<a href="/admin" class={classesToUse}>
    <CircleButton actionButton="back"/>
</a>