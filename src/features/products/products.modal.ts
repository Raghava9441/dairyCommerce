import { ApiResponse } from "@/models/index.model";

interface MainImage {
    Url: string;
    LocalPath: string;
    _Id: string;
}

interface SubImage {
    Url: string;
    LocalPath: string;
    _Id: string;
}

export interface Product {
    _Id: string;
    Category: string;
    Description: string;
    MainImage: MainImage;
    Name: string;
    Owner: string;
    Price: number;
    Stock: number;
    SubImages: SubImage[];
    __V: number;
    CreatedAt: string;
    UpdatedAt: string;
}

interface ProductsResponseData {
    Products: Product[];
    TotalProducts: number;
    Limit: number;
    Page: number;
    TotalPages: number;
    SerialNumberStartFrom: number;
    HasPrevPage: boolean;
    HasNextPage: boolean;
    PrevPage: any; // It can be null or a number
    NextPage: number | null;
}

export interface ProductsResponse {
    StatusCode: number;
    Data: ProductsResponseData;
    Message: string;
    Success: boolean;
}


export function mapToProductsResponse(apiResponse: any): ApiResponse<ProductsResponseData> {
    const products: Product[] = apiResponse.data.products.map(
        (productData: any): Product => ({
            _Id: productData._id,
            Category: productData.category,
            Description: productData.description,
            MainImage: {
                Url: productData.mainImage.url,
                LocalPath: productData.mainImage.localPath,
                _Id: productData.mainImage._id,
            },
            Name: productData.name,
            Owner: productData.owner,
            Price: productData.price,
            Stock: productData.stock,
            SubImages: productData.subImages.map(
                (subImageData: any): SubImage => ({
                    Url: subImageData.url,
                    LocalPath: subImageData.localPath,
                    _Id: subImageData._id,
                })
            ),
            __V: productData.__v,
            CreatedAt: productData.createdAt,
            UpdatedAt: productData.updatedAt,
        })
    );

    return {
        StatusCode: apiResponse.statusCode,
        Data: {
            Products: products,
            TotalProducts: apiResponse.data.totalProducts,
            Limit: apiResponse.data.limit,
            Page: apiResponse.data.page,
            TotalPages: apiResponse.data.totalPages,
            SerialNumberStartFrom: apiResponse.data.serialNumberStartFrom,
            HasPrevPage: apiResponse.data.hasPrevPage,
            HasNextPage: apiResponse.data.hasNextPage,
            PrevPage: apiResponse.data.prevPage,
            NextPage: apiResponse.data.nextPage,
        },
        Message: apiResponse.message,
        Success: apiResponse.success,
    };
}
