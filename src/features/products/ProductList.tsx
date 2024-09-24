import React from 'react';
import { Product as ProductModal } from './products.modal';
import Product from './Product';

interface Props {
    products: ProductModal[];
}

const ProductList: React.FC<Props> = React.memo(({ products }) => {
    return (
        <>
            {products?.map((product) => (
                <Product key={product._Id} product={product} />
            ))}
        </>
    );
});

export default ProductList;
