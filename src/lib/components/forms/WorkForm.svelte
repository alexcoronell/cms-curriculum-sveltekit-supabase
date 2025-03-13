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

    /* Data */
    import { skillOptions } from '$data/skills.data';

    export let id: string | null = null;


    let skillTemp: string = '';

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
        technologies: ['HTML', 'CSS', 'Javascript'],
    };

    const originRepoOptions: OriginRepo[] = ['Github', 'Gitlab']
    const statusWorkOptions: StatusWork[] = ['Active', 'Inactive', 'Developing'];

    let filteredSkillOptions: string[] = []

    const filterOptions = () => {
        filteredSkillOptions = skillOptions.filter((skill) => !work.technologies.includes(skill));
    }

    filterOptions();

    const handleAddSkill = () => {
        console.log('AddSkill');
        
        if (skillTemp) {
            work.technologies.push(skillTemp);
            skillTemp = '';
            filterOptions();
        }
        console.log(work.technologies);
        
    };

    const handleRemoveSkill = (skill: string) => {
        work.technologies = work.technologies.filter((s) => s !== skill);
        filterOptions();
    };


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
            <Select name="statusWork" optionsSelect={statusWorkOptions} label="Status" />
            <Select name="technologies" on:change={handleAddSkill} bind:value={skillTemp} optionsSelect={filteredSkillOptions} label="Technologies" />
            <div class="WorkForm__technologies border border-primary min-h-[100px] rounded-xl">
                {#each work.technologies as skill}
                    <button class="WorkForm__skill" on:click={() => handleRemoveSkill(skill)}>{skill}</button>
                {/each}
            </div>
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