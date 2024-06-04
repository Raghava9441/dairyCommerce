import { UseQueryOptions, useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported
import { ProductsResponse, mapToProductsResponse } from "../features/products/products.modal"
import { AxiosError } from "axios"

export const ProductAPI = {
    getProducts: async function (page: number, limit: number, cancel = false): Promise<ProductsResponse> {
        try {
            const response = await api.request<ProductsResponse>({
                url: `/ecommerce/products?page=${page}&limit=${limit}`,
                method: "GET",
                signal: cancel ? cancelApiObject[this.getProducts.name].handleRequestCancellation().signal : undefined,
            });
            console.log(response.data);
            const mappedResponse = mapToProductsResponse(response.data);
            return mappedResponse;
        } catch (error) {
            console.error('Error fetching products', error);
            throw error;
        }
    },
    createproduct: async function (data: any, cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/products`,
                method: "POST",
                data: data,
                signal: cancel ? cancelApiObject[this.getProducts.name].handleRequestCancellation().signal : undefined,
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching products', error);
            throw error;
        }
    },
    getProductById: async function () {
        try {

        } catch (error) {

        }
    },
    deleteProduct: async function () {
        try {

        } catch (error) {

        }
    },
    updateProduct: async function () {
        try {

        } catch (error) {

        }
    },
    getProductByCatogory: async function () {
        try {

        } catch (error) {

        }
    },
    removeSubImage: async function () {
        try {

        } catch (error) {

        }
    },
}

const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(ProductAPI);

export const UseProducts = (page: number, limit: number) => {
    return useQuery<ProductsResponse, AxiosError>({
        queryKey: ['products', page, limit],
        queryFn: () => ProductAPI.getProducts(page, limit),
    })
}
