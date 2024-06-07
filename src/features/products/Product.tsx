import { Product } from './products.modal';

interface Props {
    product: Product;
}

function Product({ product }: Props) {
    console.log('product:', product);
    return (
        <div key={product._Id}>
            <h1>{product.Name}</h1>
            <p>{product.Description}</p>
        </div>
    );
}

export default Product;
