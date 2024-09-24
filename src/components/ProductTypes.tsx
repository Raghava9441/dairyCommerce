import { UseCategorys } from "@/api/CategoryAPI"
import { Box, Typography } from "@mui/material";
import { useState } from "react"
import ProductType from "./ProductType";

type Props = {}

function ProductTypes({ }: Props) {
    const [currentPage, setcurrentPage] = useState(1);

    const ProductTypes = UseCategorys(currentPage, 10)

    if (ProductTypes.isLoading) return <div>Loading...</div>

    if (ProductTypes.error)
        return <div>somthing went wrong</div>

    if (!ProductTypes.data) return null;

    if (ProductTypes.data.Data.Categories?.length === 0) {
        return <div>No Products</div>
    }


    return (
        <Box sx={{ marginTop: "10px", maxHeight: "370px", overflow: "scroll" }}>
            <ProductType Categories={ProductTypes.data.Data.Categories} />
        </Box>
    )
}

export default ProductTypes