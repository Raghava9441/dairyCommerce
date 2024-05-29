import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported


export const ProfileAPI = {
    getProfile: async function (cancel = false) {
        const response = await api.request({
            url: `/ecommerce/profile`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.getProfile.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    updateProfile: async function (data, cancel = false) {
        const response = await api.request({
            url: `/ecommerce/profile`,
            method: "PATCH",
            signal: cancel ? cancelApiObject[this.getProfile.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    getMyOrders: async function (data, cancel = false) {
        const response = await api.request({
            url: `/ecommerce/profile/my-orders?page=1&limit=10`,
            method: "PATCH",
            signal: cancel ? cancelApiObject[this.getProfile.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(ProfileAPI);
