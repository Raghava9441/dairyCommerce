import React from 'react';
import { Product as ProductModal } from './products.modal';
import Product from './Product';

interface Props {
    products: ProductModal[];
}

function ProductList({ products }: Props) {
    return products.map((product) => <Product product={product} />);
}

export default ProductList;
