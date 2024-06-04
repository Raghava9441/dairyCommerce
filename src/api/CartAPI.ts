import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported


export const CartAPI = {
    getUserCart: async function () {
        try {

        } catch (error) {

        }
    },
    addItemOrUpdateQty: async function () {
        try {

        } catch (error) {

        }
    },
    RemoveItemFromCart: async function () {
        try {

        } catch (error) {

        }
    },
    clearCart: async function () {
        try {

        } catch (error) {

        }
    },
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(CartAPI);
