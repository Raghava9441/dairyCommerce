import { ProductCategory, mapToProductCategoryResponse, productCategoryData } from '@/models/productCategory.model';
import { axiosInstance } from './configs/axiosConfigs';
import { defineCancelApiObject, CancelApiObject, ApiObject } from './configs/axiosUtils'; // Ensure ApiObject is exported
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ApiResponse } from '@/models/index.model';

export const CategoryAPI = {
    getAllCategories: async function (page: number, limit: number, cancel = false) {
        try {
            const response = await axiosInstance.request({
                url: `/ecommerce/categories?page=${page}&limit=${limit}`,
                method: 'GET',
                withCredentials: true,
                signal: cancel ? cancelApiObject[this.getAllCategories.name].handleRequestCancellation().signal : undefined,
            });
            if (response.data.statusCode === 200) {
                const mappedResponse = mapToProductCategoryResponse(response.data);
                return mappedResponse;
            } else {
                throw new Error('Unexpected response status');
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


export const UseCategorys = (page: number, limit: number) => {
    return useQuery<ApiResponse<productCategoryData>, AxiosError>({
        queryKey: ['products', page, limit],
        queryFn: () => CategoryAPI.getAllCategories(page, limit),
    });
};