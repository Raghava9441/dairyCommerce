import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported

export const adressAPI = {
    getAllAddresses: async function () {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    createAddress: async function () {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    getAddressById: async function () {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    deleteAddress: async function () {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
    updateAddress: async function () {
        try {

        } catch (error) {
            console.log("error:", error)
            throw error
        }
    },
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(adressAPI);
