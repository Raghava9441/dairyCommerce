import { ApiResponse } from "./index.model";

export interface ProductCategory {
    Id: string;
    Name: string;
    owner: string;
    __v: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface productCategoryData {
    Categories: ProductCategory[]
    TotalCategories: number;
    Limit: number;
    Page: number;
    TotalPages: number;
    SerialNumberStartFrom: number;
    HasPrevPage: boolean;
    HasNextPage: boolean;
    PrevPage: any;
    NextPage: number | null;
}

export function mapToProductCategoryResponse(apiResponse: any): ApiResponse<productCategoryData> {
    const productCategoryData: productCategoryData = {
        Categories: apiResponse.data.Categories.map((categoryData: any): ProductCategory => ({
            Id: categoryData.Id,
            Name: categoryData.Name,
            owner: categoryData.owner,
            __v: categoryData.__v,
            createdAt: categoryData.createdAt,
            updatedAt: categoryData.updatedAt
        })),
        TotalCategories: apiResponse.data.totalCategories,
        Limit: apiResponse.data.limit,
        Page: apiResponse.data.page,
        TotalPages: apiResponse.data.totalPages,
        SerialNumberStartFrom: apiResponse.data.serialNumberStartFrom,
        HasPrevPage: apiResponse.data.hasPrevPage,
        HasNextPage: apiResponse.data.hasNextPage,
        PrevPage: apiResponse.data.prevPage,
        NextPage: apiResponse.data.nextPage
    }
    return {
        StatusCode: apiResponse.status,
        Data: productCategoryData,
        Message: apiResponse.message,
        Success: apiResponse.data
    }
}