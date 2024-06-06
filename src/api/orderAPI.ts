import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported

export const orderAPI = {
    getOrderListAdmin: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    getOrderById: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    generateRazorPayOrder: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    generatePaypalOrder: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    verifyRazerPayPayment: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    verifyPaypalPayment: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    updateOrderStatus: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(orderAPI);
