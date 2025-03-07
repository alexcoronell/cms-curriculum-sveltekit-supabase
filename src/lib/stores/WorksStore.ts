import { writable } from 'svelte/store';

/* Interfaces */
import type { Result } from '$interfaces/Result.interface';

/* Models */
import type { Work } from '$models/Work.interface';

/* Services */
import WorkService from '$services/Work.service';


const createWorkStore =()=>{
    const { subscribe, set, update } = writable<Result<Work>>({
        data: [],
        count: 0,
        loading: false,
        error: false,
        message: ''
    });
    
    const service = new WorkService()

    return {
        subscribe,
        loadWorks: async(from: number = 0, to: number = 10) => {
            set({
                data: [],
                count: 0,
                loading: true,
                error: false,
                message: ''
            })
            const { data, count, error, message } = await service.getAllSimple(from, to);
            set({
                data,
                count,
                loading: false,
                error,
                message
            })
        }
    }
}

export const WorksStore = createWorkStore();