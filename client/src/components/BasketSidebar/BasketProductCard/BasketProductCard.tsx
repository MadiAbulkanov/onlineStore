import { IProd } from '../../../interfaces/IProducts.interface';
import './BasketProductCard.scss';
import noImage from '../../../assets/No_Image.jpg';

export const BasketProductCard = ({ product }: { product: IProd }) => {

    const img = `http://localhost:8000/uploads/${product.image}`;

    return (
        <div className="basket-product-card">
            <div className='basket-card-img'>
                {product.image ? (
                    <img className="basket-product-img" src={img} />
                ) : (
                    <img className="basket-product-img" src={noImage} />
                )}
            </div>
            <div className="basket-product-info">
                <p className="basket-product-name">{product.name}</p>
                <p className="basket-product-price">{product.price} тенге</p>
            </div>
            <div>
                <p className="basket-product-quantity">{product.quant} шт</p>
            </div>
        </div>
    )
};