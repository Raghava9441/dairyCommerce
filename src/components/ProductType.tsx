import { ProductCategory } from '@/models/productCategory.model'
import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {
    Categories: ProductCategory[]
}
const ProductType = ({ Categories }: Props) => {
    const renderedCategories = React.useMemo(() => {
        return Categories.slice(0, 7).map((category: ProductCategory) => (
            <div key={category.Id}>
                <Typography variant="h5" sx={{ padding: "10px 0px" }}>{category.Name}</Typography>
            </div>
        ));
    }, [Categories]);
    return (
        <Box>
            {renderedCategories}
        </Box>
    )
}

export default ProductType