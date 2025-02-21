import type { PageLoad } from './$types';

import type { SocialMedia } from '$models/SocialMedia.interface';

import SocialMediaService from '$services/SocialMedia.service';

export const load: PageLoad = async ({ fetch }) => {
	const service = new SocialMediaService();

	try {
		const socialMedia = await service.getAll();
		return {socialMedia};
	} catch (error) {
		console.error(error);
		return { socialMedia: [] };
	}
};
