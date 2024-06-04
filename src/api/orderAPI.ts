import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported

export const orderAPI = {
    getOrderListAdmin: async function () {
        try {

        } catch (error) {

        }
    },
    getOrderById: async function () {
        try {

        } catch (error) {

        }
    },
    generateRazorPayOrder: async function () {
        try {

        } catch (error) {

        }
    },
    generatePaypalOrder: async function () {
        try {

        } catch (error) {

        }
    },
    verifyRazerPayPayment: async function () {
        try {

        } catch (error) {

        }
    },
    verifyPaypalPayment: async function () {
        try {

        } catch (error) {

        }
    },
    updateOrderStatus: async function () {
        try {

        } catch (error) {

        }
    },
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(orderAPI);
