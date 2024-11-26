import { Input } from '@mui/material';
import { ProductCardProps } from '../../../interfaces/IProducts.interface';
import './OrderCard.scss';
import { BsTrashFill } from "react-icons/bs";
import { removeFromBasket } from '../../../store/slice/basket.slice';
import { useAppDispatch } from '../../../store/hook';

export const OrderCard = ({ product }: { product: ProductCardProps }) => {
    const dispatch = useAppDispatch();

    const deletButtonHandler = () => {
        dispatch(removeFromBasket(product.id));
    }

    return (
        <div className="order-card">
            <div className='order-card-img'>
                <img className="order-product-img" src={product.image} />
            </div>
            <div className="order-product-info">
                <p className="order-product-name">{product.name}</p>
                <p className="order-product-price">{product.price} тенге</p>
            </div>
            <Input className="order-product-quant" type='number' />
            <p className="order-product-sum">{product.price} тенге</p>
            <button className="delet-product-button" onClick={deletButtonHandler}>
                <BsTrashFill size={20} color="#0A2344"/>
            </button>
        </div>
    )
};