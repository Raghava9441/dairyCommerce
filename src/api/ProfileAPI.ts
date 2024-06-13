import axios from 'axios';
import { defineCancelApiObject, CancelApiObject, ApiObject } from './configs/axiosUtils'; // Ensure ApiObject is exported
import { axiosInstance } from './configs/axiosConfigs';
const base_url = 'http://localhost:8080/api/v1'

export const ProfileAPI = {
    getProfile: async function (cancel = false) {
        const response = await axiosInstance.request({
            url: `/ecommerce/profile`,
            method: 'GET',
            signal: cancel ? cancelApiObject[this.getProfile.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },
    updateProfile: async function (data: any, cancel = false) {
        const response = await axios.request({
            url: `/ecommerce/profile`,
            method: 'PATCH',
            data: data,
            withCredentials: true,
            signal: cancel ? cancelApiObject[this.updateProfile.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },
    getMyOrders: async function (page: number, limit: number, cancel = false) {
        const response = await axios.request({
            url: `/ecommerce/profile/my-orders?page=${page}&limit=${limit}`,
            method: 'PATCH',
            withCredentials: true,
            signal: cancel ? cancelApiObject[this.getMyOrders.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },
};
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(ProfileAPI);
