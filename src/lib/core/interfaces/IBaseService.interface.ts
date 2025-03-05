import type { Response } from "$lib/types/Response.type";

export interface IBaseService<T> {
    getAll(from: number, to: number): Promise<Response<T[]>>;
}