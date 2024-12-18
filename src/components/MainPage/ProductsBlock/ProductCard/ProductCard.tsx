import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';
import { IProduct } from '../../../../interfaces/IProducts.interface';
import noImage from '../../../../assets/No_Image.jpg';

export const ProductCard = ({ product }: { product: IProduct }) => {
    const navigate = useNavigate();

    const handleOpen = () => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

    const img = `http://localhost:8000/uploads/${product.image}`;

    return (
        <>
            <div className="product-card">
                <div className='card-img'>
                    {product.image ? (
                        <img className="product-img" src={img} />
                    ) : (
                        <img className="product-img" src={noImage} /> 
                    )}
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