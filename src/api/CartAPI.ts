import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported

export const CartAPI = {
    getUserCart: async function (cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/cart`,
                method: "GET",
                signal: cancel ? cancelApiObject[this.getUserCart.name].handleRequestCancellation().signal : undefined,
            })
            return response.data
        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    addItemOrUpdateQty: async function (id: string, data: any, cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/cart/item/${id}`,
                method: "POST",
                data: data,
                signal: cancel ? cancelApiObject[this.addItemOrUpdateQty.name].handleRequestCancellation().signal : undefined,
            })
            return response.data
        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    removeItemFromCart: async function (id: string, cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/cart/item/${id}`,
                method: "DELETE",
                signal: cancel ? cancelApiObject[this.removeItemFromCart.name].handleRequestCancellation().signal : undefined,
            })
            return response.data
        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    clearCart: async function (cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/cart/clear`,
                method: "DELETE",
                signal: cancel ? cancelApiObject[this.clearCart.name].handleRequestCancellation().signal : undefined,
            })
            return response.data
        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(CartAPI);
