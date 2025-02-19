import type { PageLoad } from './$types';

import type { Training } from '$models/Training.interface'; 
import TrainingService from '$services/Training.service';

export const load: PageLoad = async ({ fetch }) => {
    const service = new TrainingService();
    try {
        const trainings: Training[] = await service.getAll();
        return { trainings };
    } catch (error) {
        console.error(error);
        return { trainings: [] };
    }
};