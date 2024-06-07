import { defineCancelApiObject, CancelApiObject, ApiObject } from './configs/axiosUtils'; // Ensure ApiObject is exported

export const CategoryAPI = {
    getAllCategories: async function (cancel = false) {
        try {
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    createCategory: async function (cancel = false) {
        try {
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    getCategoriesById: async function (cancel = false) {
        try {
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    deleteCategory: async function (cancel = false) {
        try {
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
    updateCategory: async function (cancel = false) {
        try {
        } catch (error) {
            console.log('error:', error);
            throw error;
        }
    },
};

const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(CategoryAPI);
