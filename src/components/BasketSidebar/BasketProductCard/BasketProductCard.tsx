import { ProductCardProps } from '../../../interfaces/IProducts.interface';
import './BasketProductCard.scss';

export const BasketProductCard = ({ product }: { product: ProductCardProps }) => {

    return (
        <div className="basket-product-card">
            <div className='basket-card-img'>
                <img className="basket-product-img" src={product.image} />
            </div>
            <div className="basket-product-info">
                <p className="basket-product-name">{product.name}</p>
                <p className="basket-product-price">{product.price} тенге</p>
            </div>
        </div>
    )
};