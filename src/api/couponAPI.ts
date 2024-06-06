
import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported

export const couponAPI = {
    getAllCoupons: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    createCoupon: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    getAvailableCouponsForCustomer: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    getCouponById: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    DeleteCoupon: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    updateCoupon: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    applyCouponCode: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    removeCouponCode: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    updateCouponActiveStatus: async function (cancel = false) {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    }
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(couponAPI);
