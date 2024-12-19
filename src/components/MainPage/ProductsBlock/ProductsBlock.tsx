import { IProduct } from '../../../interfaces/IProducts.interface';
import { ProductCard } from './ProductCard/ProductCard';
import './ProductsBlock.scss';

export const ProductsBlock = ({ products, blockTitle }:{ products: IProduct[], blockTitle: string }) => {
    return (
        <>
            <div className="products-block">
                <h1 className="products-block-title">{blockTitle}</h1>
                <div className="products" >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </>
    )
};