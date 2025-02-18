import type { PageLoad } from './$types';

import type { Profile } from '$models/Profile.interface';

import ProfileService from '$services/Profile.service';

export const load: PageLoad = async ({ fetch }) => {
	const service = new ProfileService();

	try {
        const profile = await service.get();
        return profile;
    } catch (error) {
        console.error(error);
        return { profile: null };
    }
};
