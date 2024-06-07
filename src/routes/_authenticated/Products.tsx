import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { UseProducts } from '../../api/productAPI';
import ProductList from '../../features/products/ProductList';
import { Pagination, Stack, Typography } from '@mui/material';

// const productsQueryOptions = queryOptions({
//     queryKey: ['posts'],
//     queryFn: () => ProductAPI.getProducts(),
// })

export const Route = createFileRoute('/_authenticated/Products')({
    // loader: async ({ context: { queryClient } }) => {
    //     queryClient.ensureQueryData(productsQueryOptions)
    // },
    component: Products,
});
function Products() {
    const [currentPage, setcurrentPage] = useState(1);

    //method:1 using built in route query
    // const postsQuery = useSuspenseQuery(productsQueryOptions)
    // const posts = postsQuery.data
    // const MappedProducts = mapToProductsResponse(postsQuery.data)

    //method 2 :using reactjs useeffect
    // useEffect(() => {
    //     ProductAPI.getProducts().then((result) => {
    //         let ProductResponse = mapToProductsResponse(result)
    //         console.log("ProductResponse:", ProductResponse)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [])

    //method 3 : useQuery
    const productQuery = UseProducts(currentPage, 10);

    if (!productQuery.data) return null;

    return (
        <div>
            <Typography>Products</Typography>
            {productQuery.isLoading ? <div>Loading...</div> : <ProductList products={productQuery.data.Data.Products} />}
            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Pagination count={productQuery.data.Data.TotalPages} variant="outlined" color="primary" />
            </Stack>
        </div>
    );
}
