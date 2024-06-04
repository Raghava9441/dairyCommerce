
import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported

export const couponAPI = {
    getAllCoupons: async function () {
        try {

        } catch (error) {

        }
    },
    createCoupon: async function () {
        try {

        } catch (error) {

        }
    },
    getAvailableCouponsForCustomer: async function () {
        try {

        } catch (error) {

        }
    },
    getCouponById: async function () {
        try {

        } catch (error) {

        }
    },
    DeleteCoupon: async function () {
        try {

        } catch (error) {

        }
    },
    updateCoupon: async function () {
        try {

        } catch (error) {

        }
    },
    applyCouponCode: async function () {
        try {

        } catch (error) {

        }
    },
    removeCouponCode: async function () {
        try {

        } catch (error) {

        }
    },
    updateCouponActiveStatus: async function () {
        try {

        } catch (error) {

        }
    }
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(couponAPI);
