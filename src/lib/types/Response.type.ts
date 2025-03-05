export type Response<T> = {
    data: T | T[];
    count?: number;
    message?: string;
    error?: boolean;
};