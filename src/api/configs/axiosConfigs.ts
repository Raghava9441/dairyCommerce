import axios, { AxiosError } from "axios"
import { LocalStorage } from "../../utils/localStorage";
import { AuthAPI } from "../AuthAPI";

export const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
})

axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.withCredentials = true;

/* Refresh Token */

/* Flag to check if token refresh is in progress */
let refreshingTokenInProgress = false;
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
/* Axios response intercepto */
axios.interceptors.response.use(
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

            const response = await AuthAPI.refreshAccessToken();

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




// // defining a custom error handler for all APIs
// const errorHandler = (error: { response: { status: any }; code: string }) => {
//     const statusCode = error.response?.status

//     if (error.code === "ERR_CANCELED") {
//         // notification.error({
//         //     placement: "bottomRight",
//         //     description: "API canceled!",
//         // })
//         return Promise.resolve()
//     }

//     // logging only errors that are not 401
//     if (statusCode && statusCode !== 401) {
//         console.error(error)
//     }

//     return Promise.reject(error)
// }

// const refreshAccessToken = async () => {
//     console.log("refresh")
//     // Make a request to your backend to refresh the access token
//     const response = await axios.post('http://localhost:8080/api/v1/users/refresh-token');
//     return response.data.accessToken;
// };

// api.interceptors.request.use(
//     async (config) => {
//         // Check if the access token is present and not expired
//         const user = LocalStorage.get('current-user');
//         if (user) {
//             let accessToken = user.accessToken
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// api.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalRequest = error.config;

//         // If the error status is 401 and there is no token refresh attempt yet
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             console.log("token failed")
//             try {
//                 // Refresh the access token
//                 const accessToken = await refreshAccessToken();
//                 // Update the original request headers with the new access token
//                 originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//                 // Retry the original request
//                 return api(originalRequest);
//             } catch (error) {
//                 // If refresh token fails, log out the user or handle accordingly
//                 console.error('Error refreshing access token: ', error);
//                 // Log out the user or handle accordingly
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// // registering the custom error handler to the
// // "api" axios instance
// api.interceptors.response.use(undefined, (error) => {
//     return errorHandler(error)
// })
