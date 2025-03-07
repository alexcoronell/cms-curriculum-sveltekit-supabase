export interface Result<T> {
    data: T | T[];
    count: number;
    loading: boolean;
    error: boolean;
    message: string;
}