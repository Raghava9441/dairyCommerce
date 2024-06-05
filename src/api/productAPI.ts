import { useQuery } from "@tanstack/react-query"
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
    getProductById: async function (id: string, cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/products${id}`,
                method: "GET",
                signal: cancel ? cancelApiObject[this.getProductById.name].handleRequestCancellation().signal : undefined,
            });
            return response
        } catch (error) {
            console.log("error:", error)
            throw error;
        }
    },
    deleteProduct: async function (id: string, cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/products${id}`,
                method: "DELETE",
                signal: cancel ? cancelApiObject[this.deleteProduct.name].handleRequestCancellation().signal : undefined,
            });
            return response
        } catch (error) {
            console.log("error:", error)
            throw error;
        }
    },
    updateProduct: async function (id: string, cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/products${id}`,
                method: "PATCH",
                signal: cancel ? cancelApiObject[this.updateProduct.name].handleRequestCancellation().signal : undefined,
            });
            return response
        } catch (error) {
            console.log("error:", error)
            throw error;
        }
    },
    getProductByCatogory: async function (id: string, page: number, limit: number, cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/products/category/${id}?page=${page}&limit=${limit}`,
                method: "GET",
                signal: cancel ? cancelApiObject[this.getProductByCatogory.name].handleRequestCancellation().signal : undefined,
            });
            return response
        } catch (error) {
            console.log("error:", error)
            throw error;
        }
    },
    removeSubImage: async function (productId: string, subImageId: string, cancel = false) {
        try {
            const response = await api.request({
                url: `/ecommerce/products/remove/subimage/${productId}/${subImageId}`,
                method: "PATCH",
                signal: cancel ? cancelApiObject[this.getProductByCatogory.name].handleRequestCancellation().signal : undefined,
            });
            return response
        } catch (error) {
            console.log("error:", error)
            throw error;
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
