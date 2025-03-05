<script lang="ts">
    export let label: string = '';
    export let name: string = '';
    export let optionsSelect: { value: string | number | null; label: string }[] = [];
    export let value: string | number | null = null
    export let classes: string = ''
    export let isReadOnly: boolean = false

    const classesToUse = `formgroup ${classes}`.trim();
</script>
<div class={classesToUse}>
    <label for={name}>
        <select {name} id={name} bind:value class="w-full">
            {#each optionsSelect as option}
                <option value={option.value}>{option.label}</option>
            {/each}
        </select>
        <span>{label}</span>
    </label>
</div>
