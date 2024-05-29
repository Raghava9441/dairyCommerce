import { useQuery } from "@tanstack/react-query"
import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject, CancelApiObject, ApiObject } from "./configs/axiosUtils" // Ensure ApiObject is exported
import { mapToProductsResponse } from "../features/products/products.modal"

export const ProductAPI = {
    getProducts: async function (page: number, limit: number, cancel = false) {
        const response = await api.request({
            url: `/ecommerce/products?page=${page}&limit=${limit}`,
            method: "GET",
            signal: cancel ? cancelApiObject[this.getProducts.name].handleRequestCancellation().signal : undefined,
        })
        console.log(response.data)
        const MapedResponse = mapToProductsResponse(response.data)
        return MapedResponse
    },
}

const cancelApiObject: CancelApiObject<ApiObject> = defineCancelApiObject(ProductAPI);

export const UseProducts = (page: number, limit: number) => {
    return useQuery({
        queryKey: ['products', page, limit],
        queryFn: () => ProductAPI.getProducts(page, limit),
    })
}


