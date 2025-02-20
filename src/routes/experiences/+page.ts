import type { PageLoad } from './$types';

import type { Experience } from '$models/Experience.interface';
import ExperienceService from '$services/Experience.service';

export const load: PageLoad = async ({ fetch }) => {
    const service = new ExperienceService();
    try {
        const experiences: Experience[] = await service.getAll();
        return { experiences };
    } catch (error) {
        console.error(error);
        return { experiences: [] };
    }
};