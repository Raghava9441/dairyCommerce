import axios from "axios"
import Cookies from "js-cookie"

export const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1', // replace with your API base URL
  withCredentials: true, // allow sending cookies with requests
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    console.log("token:", token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return api(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = Cookies.get('refreshToken');
      return new Promise(function (resolve, reject) {
        alert("token expiered")
        api
          .post('users/refresh-token', { token: refreshToken }) // replace with your refresh token endpoint
          .then(({ data }) => {
            Cookies.set('accessToken', data.accessToken);
            Cookies.set('refreshToken', data.refreshToken);
            api.defaults.headers.common['Authorization'] = 'Bearer ' + data.accessToken;
            originalRequest.headers['Authorization'] = 'Bearer ' + data.accessToken;
            processQueue(null, data.accessToken);
            resolve(api(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  }
);


// let refreshingTokenInProgress = false;
// export class ApiErrorResponse {
//     constructor(
//         public statusCode: number,
//         public message: string,
//         public errors: [],
//         public stack: string
//     ) { }
// }
// class ApiError {
//     public error: boolean = true;
//     constructor(
//         public errorMessage: string,
//         public errorData?: AxiosError,
//         public errorResponse?: ApiErrorResponse
//     ) { }
// }
// const api = axios.create({
//     baseURL: 'YOUR_API_BASE_URL', // replace with your API base URL
//     withCredentials: true, // allow sending cookies with requests
// });

// api.interceptors.request.use(
//     req => {
//         let currentUser = LocalStorage.get("current-user");
//         console.log("token:", currentUser)
//         if (!!currentUser.accessToken && req.method !== "OPTIONS") {
//             req.headers.authorization = `Bearer ${currentUser.accessToken}`;
//         }
//         return req
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {

//         /* If an error has occurred from refresh token api */
//         if (error?.config?.url?.includes("refresh-token")) {
//             return Promise.reject(error);
//         }
//         /*If the response status is 401, and the requested api end point is not login api  */
//         if (
//             error?.response?.status === 401 &&
//             !error?.config?.url?.includes("login") &&
//             !refreshingTokenInProgress
//         ) {

//             /* Refreshing the token */
//             refreshingTokenInProgress = true;

//             const response = await AuthAPI.refreshAccessToken();

//             refreshingTokenInProgress = false;

//             /* Refresh token success */
//             if (!(response instanceof ApiError)) {
//                 /* Replay the original request */
//                 return axios(error.config);
//             }
//         }
//         /* Other errors */
//         return Promise.reject(error);
//     }
// );
