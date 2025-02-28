<script lang="ts">
    export let name: string = 'file'
    export let isReadOnly: boolean = false
    export let label: string = 'Upload file'
    export let extensions: string = 'bmp, jpg, jpeg, png, webp'
</script>

<div class="InputFile">
    <label class={`InputFile__label ${isReadOnly ? 'pointer-events-none' : 'pointer-events-auto'}`.trim()} for="imageInput">
        {label}
    </label>
    <span class="InputFile__extensions_1">{extensions}</span>
    <input class="InputFile__input" type="file" id="imageInput" {name} readonly={isReadOnly}>
    <span class="InputFile__filename">No file uploaded</span>
</div>
<span class="InputFile__extensions_2">{extensions}</span>

<style>
    .InputFile {
        @apply w-full lg:border lg:border-primary/50 lg:py-2 lg:rounded-md;
    }

    .InputFile__label {
        @apply cursor-pointer text-background bg-primary px-4 py-2 rounded-md transition-all duration-300 hover:bg-primary lg:border lg:border-primary lg:rounded-r-none;
    }

    .InputFile__extensions_1, .InputFile__extensions_2 {
        @apply block text-xs text-primary my-2;
    }

    .InputFile__extensions_1 {
        @apply lg:hidden;
    }

    .InputFile__input {
        @apply hidden;
    }

    .InputFile__filename {
        @apply mt-6 lg:pl-3;
    }
</style>