import { api } from './configs/axiosConfigs';
import { defineCancelApiObject, CancelApiObject, ApiObject } from './configs/axiosUtils'; // Ensure ApiObject is exported

export const ProfileAPI = {
    getProfile: async function (cancel = false) {
        const response = await api.request({
            url: `/ecommerce/profile`,
            method: 'GET',
            signal: cancel ? cancelApiObject[this.getProfile.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },
    updateProfile: async function (data: any, cancel = false) {
        const response = await api.request({
            url: `/ecommerce/profile`,
            method: 'PATCH',
            data: data,
            signal: cancel ? cancelApiObject[this.updateProfile.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },
    getMyOrders: async function (page: number, limit: number, cancel = false) {
        const response = await api.request({
            url: `/ecommerce/profile/my-orders?page=${page}&limit=${limit}`,
            method: 'PATCH',
            signal: cancel ? cancelApiObject[this.getMyOrders.name].handleRequestCancellation().signal : undefined,
        });

        return response.data;
    },
};
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(ProfileAPI);
