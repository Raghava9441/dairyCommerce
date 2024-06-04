import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported

export const adressAPI = {
    getAllAddresses: async function () {
        try {

        } catch (error) {

        }
    },
    createAddress: async function () {
        try {

        } catch (error) {

        }
    },
    getAddressById: async function () {
        try {

        } catch (error) {

        }
    },
    deleteAddress: async function () {
        try {

        } catch (error) {

        }
    },
    updateAddress: async function () {
        try {

        } catch (error) {

        }
    },
}
const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(adressAPI);
