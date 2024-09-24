import { Box } from '@mui/material';
import { Product } from './products.modal';

interface Props {
    product: Product;
}

function Product({ product }: Props) {
    return (
        <Box key={product._Id}>
            <h1>{product.Name}</h1>
            <p>{product.Description}</p>
        </Box>
    );
}

export default Product;
