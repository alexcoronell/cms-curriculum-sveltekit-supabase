<script lang="ts">
    /* Components */
    import Input from '$components/ui/form/Input.svelte';
    import Select from '$components/ui/form/Select.svelte';
    import TextArea from '$components/ui/form/TextArea.svelte';

    /* Models */
    import type { Work } from '$models/Work.interface';

    /* Types */
    import type { ModeForm } from '$lib/core/types/ModeForm.type';
    import type { OriginRepo } from '$lib/core/types/OriginRepo.type';
    import type { StatusWork } from '$lib/core/types/StatusWork.type';

    export let id: string | null = null;

    $: title = id ? `Edit Work` : 'Create Work';
    $: mode = id ? 'detail' : 'create' as ModeForm;

    const work: Work = {
        id: id || '',
        title: '',
        url: '',
        repoUrl: '',
        originRepo: undefined,
        publicRepo: false,
        image: '',
        order: 0,
        status: undefined,
        technologies: '',
    };

    const originRepoOptions: { value: OriginRepo; label: string }[] = [
        { value: 'Github', label: 'Github' },
        { value: 'Gitlab', label: 'Gitlab' },
    ];

    const statusWorkOptions: { value: StatusWork; label: string }[] = [
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'Developing', label: 'Developing' },
    ];

</script>

<div class="WorkForm">
    <h4 class="WorkForm__title">{title}</h4>
    <form class="WorkForm__form">
        <div class="WorkForm__section1">
            <Input type="text" name="title" label="Title" />
            <Input type="text" name="url" label="Url" />
            <Input type="text" name="repoUrl" label="Repository Url" />
            <Select name="originRepo" optionsSelect={originRepoOptions} label="Origin Repository" />
        </div>
        <div class="WorkForm__section2">
            <Select name="statusWork" optionsSelect={originRepoOptions} label="Status" />
            <Select name="technologies" optionsSelect={[]} label="Technologies" />
            <TextArea name="detailTechnologies" label="Detail Technologies" />
        </div>
        <div>
            <p>Public repository</p>
        </div>

        <div>
            <p>Image</p>
        </div>
            <p>Save</p>
            <p>Cancel</p>
            <p>Edit</p>
            <p>Back</p>
    </form>
</div>