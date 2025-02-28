<script lang="ts">
	import type { Profile } from '$models/Profile.interface';
	export let currentProfile: Profile;
    import Input from '$components/ui/form/Input.svelte';
    import Button from '$lib/components/ui/buttons/Button.svelte';
    import ButtonBack from '$components/ui/buttons/ButtonBack.svelte';
    import InputFile from '$components/ui/form/InputFile.svelte';
    const { id, firstname, lastname, title, email, description, image } = currentProfile
    let profile: Profile = {
        id,
        firstname,
        lastname,
        title,
        email,
        description,
        image
    }
    const cancel = () => {
        isReadOnly = true
        profile = currentProfile
    }
    let isReadOnly = true;
</script>

<div class="ProfileForm">
    <form class="ProfileForm__form">
        <div class="ProfileForm__image">
            <img src={image} alt={`${firstname} ${lastname} profile image`} />
        </div>
        <div class="ProfileForm__basicData">
            <Input label="First Name" name="firstname" bind:value={profile.firstname} isReadOnly={isReadOnly} />
            <Input label="Last Name" name="lastname" bind:value={profile.lastname} isReadOnly={isReadOnly} />
            <Input label="Title" name="title" bind:value={profile.title} isReadOnly={isReadOnly} />
            <Input label="Email" name="email" bind:value={profile.email} isReadOnly={isReadOnly} />
        </div>
        <div class="ProfileForm__imageInput">
            <InputFile name="image" isReadOnly={isReadOnly} />
        </div>
        <div class="ProfileForm__description">
            <Input label="Description" name="description" bind:value={profile.description} isReadOnly={isReadOnly} />
        </div>
        <div class="ProfileForm__actions">
            {#if isReadOnly}
            <Button type="button" variant="secondary" classes="w-full" on:click={() => {isReadOnly = false}}>Edit</Button>
            <ButtonBack />
            {:else}
            <Button variant="primary" classes="w-full">Save</Button>
            <Button type="reset" variant="light" classes="w-full" on:click={cancel}>Cancel</Button>

            {/if}
        </div>
    </form>
</div>

<style>
    .ProfileForm {
        @apply w-full mx-auto max-w-[400px] lg:max-w-[700px];
    }

    .ProfileForm__form {
        @apply w-full grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center;
    }

    .ProfileForm__image {
        @apply w-full max-w-[200px] overflow-hidden rounded-full border border-primary flex items-center justify-center mx-auto lg:min-w-[250px] lg:max-w-[250px] lg:h-[250px];
    }

    .ProfileForm__image > img {
        @apply w-full;
    }

    .ProfileForm__imageInput, .ProfileForm__description, .ProfileForm__actions {
        @apply lg:col-span-2;
    }

    .ProfileForm__actions {
        @apply w-full grid grid-cols-2 gap-3
    }
</style>