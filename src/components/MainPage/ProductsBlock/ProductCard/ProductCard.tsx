import { useNavigate } from 'react-router-dom';
import { ProductCardProps } from '../../../../interfaces/IProducts.interface';
import './ProductCard.scss';

export const ProductCard = ({ product }: { product: ProductCardProps }) => {
    const navigate = useNavigate();

    const handleOpen = () => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

    return (
        <>
            <div className="product-card">
                <div className='card-img'>
                    <img className="product-img" src={product.image} />
                    <div className='prod-link'>
                        <button className="product-button" onClick={handleOpen}>Просмотреть товар</button>
                    </div>
                </div>
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price} тенге</p>
            </div>
        </>
    )
};