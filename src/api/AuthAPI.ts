import { LoginUser, RegisterUser } from "../features/authentication/authentication.modal"
import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported


export const AuthAPI = {
    RegisterUser: async function (userData: RegisterUser, cancel = false) {
        const response = await api.request({
            url: `/users/register`,
            method: "POST",
            data: userData,
            signal: cancel ? cancelApiObject[this.RegisterUser.name].handleRequestCancellation().signal : undefined,
        })
        return response.data
    },
    Login: async function (userData: LoginUser, cancel = false) {
        const response = await api.request({
            url: `/users/login`,
            method: "POST",
            data: userData,
            signal: cancel ? cancelApiObject[this.RegisterUser.name].handleRequestCancellation().signal : undefined,
        })
        return response.data
    },
    Logout: async function (userData: LoginUser, cancel = false) {
        const response = await api.request({
            url: `/users/logout`,
            method: "POST",
            data: userData,
            signal: cancel ? cancelApiObject[this.RegisterUser.name].handleRequestCancellation().signal : undefined,
        })
        return response.data
    },
    refreshAccessToken: async function (cancel = false) {
        const response = await api.request({
            url: `/users/refresh-token`,
            method: "POST",
            signal: cancel ? cancelApiObject[this.RegisterUser.name].handleRequestCancellation().signal : undefined,
        })
        return response.data
    },
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(AuthAPI);


