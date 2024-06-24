import { AxiosError } from "axios";

export interface ApiResponse<T> {
    StatusCode: number;
    Data: T;
    Message: string;
    Success: boolean;
}

export interface ApiErrorResponse {
    statusCode: number;
    message: string;
    errors: any[];
    stack: string;
}

export interface ApiError {
    error: boolean;
    errorMessage: string;
    errorData?: AxiosError;
    errorResponse?: ApiErrorResponse;
}