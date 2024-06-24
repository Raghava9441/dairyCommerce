import { mapToProductCategoryResponse } from '@/models/productCategory.model';
import { axiosInstance } from './configs/axiosConfigs';
import { defineCancelApiObject, CancelApiObject, ApiObject } from './configs/axiosUtils'; // Ensure ApiObject is exported

export const CategoryAPI = {
    getAllCategories: async function (page: number, limit: number, cancel = false) {
        try {
            const response = await axiosInstance.request({
                url: `/ecommerce/categories?page=${page}&limit=${limit}`,
                method: 'GET',
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.getAllCategories.name].handleRequestCancellation().signal : undefined,
            });
            if (response.data.StatusCode === 200) {
                const mappedResponse = mapToProductCategoryResponse(response.data);
                return mappedResponse;
            }
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
