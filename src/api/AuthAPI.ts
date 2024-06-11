import axios from 'axios';
import { LoginUser, RegisterUser } from '../features/authentication/authentication.modal';
import { defineCancelApiObject, CancelApiObject, ApiObject } from './configs/axiosUtils';
// Ensure ApiObject is exported
const base_url = 'http://localhost:8080/api/v1'

export const AuthAPI = {
    RegisterUser: async function (userData: RegisterUser, cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/register`,
                method: 'POST',
                withCredentials: true,
                data: userData,
                signal: cancel ? cancelApiObject[this.RegisterUser.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    Login: async function (userData: LoginUser, cancel = false) {
        try {
            const response = await axios.request({
                url: `${base_url}/users/login`,
                method: 'POST',
                withCredentials: true,
                data: userData,
                signal: cancel ? cancelApiObject[this.RegisterUser.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    Logout: async function (cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/logout`,
                method: 'POST',
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.RegisterUser.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    refreshAccessToken: async function (cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/refresh-token`,
                method: 'POST',
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.RegisterUser.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            this.Logout();
            throw error;
        }
    },
    asignRole: async function (id: string, cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/assign-role/${id}`,
                method: 'POST',
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.asignRole.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    resendEmailVerification: async function (cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/resend-email-verification`,
                method: 'POST',
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.resendEmailVerification.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    changeCurrentPassword: async function (data: any, cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/change-password`,
                method: 'POST',
                data: data,
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.changeCurrentPassword.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    forgotPasswordRequest: async function (data: any, cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/forgot-password`,
                method: 'POST',
                data: data,
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.forgotPasswordRequest.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    resetForgottenPassword: async function (resetToken: string, data: any, cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/reset-password/${resetToken}`,
                method: 'POST',
                data: data,
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.resetForgottenPassword.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    updateAvatar: async function (file: any, cancel = false) {
        try {
            const response = await axios.request({
                url: `/users/avatar`,
                method: 'POST',
                data: file,
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.updateAvatar.name].handleRequestCancellation().signal : undefined,
            });
            return response.data;
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
};
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(AuthAPI);
