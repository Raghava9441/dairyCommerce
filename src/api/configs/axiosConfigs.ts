import { LocalStorage } from '@/utils/localStorage';
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1', // replace with your API base URL
    withCredentials: true, // allow sending cookies with requests
});


// Request interceptor
api.interceptors.request.use(
    async (config) => {
        const currentUser = LocalStorage.get("current-user");
        const accessToken = currentUser ? currentUser.accessToken : null;
        console.log("AccessToken:", accessToken);
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const currentUser = LocalStorage.get("current-user");
            const refreshToken = currentUser ? currentUser.refreshToken : null;
            console.log("RefreshToken:", refreshToken);
            if (refreshToken) {
                try {
                    const { data } = await api.post('/users/refresh-token', {}, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    currentUser.accessToken = data.accessToken;
                    LocalStorage.set("current-user", currentUser);
                    api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
                    return api(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    }
);