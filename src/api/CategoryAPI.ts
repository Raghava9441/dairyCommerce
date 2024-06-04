
import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported

export const CategoryAPI = {
    getAllCategories: async function () {
        try {

        } catch (error) {

        }
    },
    createCategory: async function () {
        try {

        } catch (error) {

        }
    },
    getCategoriesById: async function () {
        try {

        } catch (error) {

        }

    },
    deleteCategory: async function () {
        try {

        } catch (error) {

        }
    },
    updateCategory: async function () {
        try {

        } catch (error) {

        }
    },
}

const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(CategoryAPI);
