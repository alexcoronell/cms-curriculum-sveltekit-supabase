<script lang="ts">
	import type { Profile } from '$models/Profile.interface';
	import type { PageData } from './$types';

	import AdminPagesLayout from '$components/layouts/AdminPagesLayout.svelte';
	import ProfileForm from '$components/forms/ProfileForm.svelte';

	export let data: PageData;
	const profile = data as Profile;
</script>

<AdminPagesLayout title="Profile Admin">
	<section class="ProfileAdmin">
		<ProfileForm currentProfile={profile} />
	</section>
</AdminPagesLayout>
