import axios from "axios"
import config from "../../../config";
import { AuthService } from "../../features/authentication/authentication.service";
import { LocalStorage } from "../../utils/localStorage";
// import { notification } from "antd"

export const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
})


// defining a custom error handler for all APIs
const errorHandler = (error: { response: { status: any }; code: string }) => {
    const statusCode = error.response?.status

    if (error.code === "ERR_CANCELED") {
        // notification.error({
        //     placement: "bottomRight",
        //     description: "API canceled!",
        // })
        return Promise.resolve()
    }

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

const refreshAccessToken = async () => {
    console.log("refresh")
    // Make a request to your backend to refresh the access token
    const response = await axios.post('http://localhost:8080/api/v1/users/refresh-token');
    return response.data.accessToken;
};

api.interceptors.request.use(
    async (config) => {
        // Check if the access token is present and not expired
        const user = LocalStorage.get('current-user');
        if (user) {
            let accessToken = user.accessToken
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no token refresh attempt yet
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            console.log("token failed")
            try {
                // Refresh the access token
                const accessToken = await refreshAccessToken();
                // Update the original request headers with the new access token
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                // Retry the original request
                return api(originalRequest);
            } catch (error) {
                // If refresh token fails, log out the user or handle accordingly
                console.error('Error refreshing access token: ', error);
                // Log out the user or handle accordingly
            }
        }
        return Promise.reject(error);
    }
);

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})
