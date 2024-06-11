import axios from 'axios';

import { AxiosError } from "axios";

export class ApiErrorResponse {
    constructor(
        public statusCode: number,
        public message: string,
        public errors: [],
        public stack: string
    ) { }
}
class ApiError {
    public error: boolean = true;
    constructor(
        public errorMessage: string,
        public errorData?: AxiosError,
        public errorResponse?: ApiErrorResponse
    ) { }
}
export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

/* Refresh Token */

/* Flag to check if token refresh is in progress */
let refreshingTokenInProgress = false;

/* Axios response intercepto */
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        /* If an error has occurred from refresh token api */
        if (error?.config?.url?.includes("refresh-token")) {
            return Promise.reject(error);
        }
        /*If the response status is 401, and the requested api end point is not login api  */
        if (
            error?.response?.status === 401 &&
            !error?.config?.url?.includes("login") &&
            !refreshingTokenInProgress
        ) {

            /* Refreshing the token */
            refreshingTokenInProgress = true;

            const response = await axios.post("http://localhost:8080/api/v1/users/refresh-token", {}, { withCredentials: true });

            /* Refresh token success */

            refreshingTokenInProgress = false;

            /* Refresh token success */
            if (!(response instanceof ApiError)) {
                /* Replay the original request */
                return axios(error.config);
            }
        }

        /* Other errors */
        return Promise.reject(error);
    }
);
