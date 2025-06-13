import { useNavigate } from 'react-router-dom';
import noImage from '../../../../assets/No_Image.jpg';
import { FC } from "react";
import { IProduct } from '../../../../types/IProducts.interface';

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const img = `http://localhost:8000/uploads/${product.image}`;

  return (
    <div className="product-card">
      <div className='card-img'>
        {product.image ? (
          <img className="product-img" src={img} />
        ) : (
          <img className="product-img" src={noImage} />
        )}
        <button className="product-button" onClick={handleOpen}>Просмотреть товар</button>
      </div>
      <p className="product-name">{product.name}</p>
      <p className="product-price">{product.price} тенге</p>
    </div>
  )
};
