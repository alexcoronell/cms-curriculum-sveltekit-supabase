import type { PageLoad } from './$types';

import type { Study } from '$models/Study.interface';
import StudyService from '$services/Study.service';

export const load: PageLoad = async ({ fetch }) => {
    const service = new StudyService();
    try {
        const studies: Study[] = await service.getAll();
        return { studies };
    } catch (error) {
        console.error(error);
        return { studies: [] };
    }
};