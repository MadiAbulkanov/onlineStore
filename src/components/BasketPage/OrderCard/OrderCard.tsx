import { Input } from '@mui/material';
import { BsTrashFill } from "react-icons/bs";
import noImage from '../../../assets/No_Image.jpg';
import { useState } from 'react';
import { IProd } from '../../../types/IProducts.interface';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addToBasket, removeFromBasket } from '../../../store/slice/basket';

export const OrderCard = ({ product }: { product: IProd }) => {
    const dispatch = useAppDispatch();

    const [prod, setProd] = useState<IProd>(product)

    const deletButtonHandler = () => {
        dispatch(removeFromBasket(product.id));
    }

    const img = `http://localhost:8000/uploads/${product.image}`;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (Number(value) > 0) {
            setProd({ ...prod, quant: Number(value) });
            dispatch(addToBasket(prod));
        }
    };

    return (
        <div className="order-card">
            <div className='order-card-img'>
                {product.image ? (
                    <img className="basket-product-img" src={img} />
                ) : (
                    <img className="basket-product-img" src={noImage} />
                )}
            </div>
            <div className="order-product-info">
                <p className="order-product-name">{product.name}</p>
                <p className="order-product-price">{product.price} тенге</p>
            </div>
            <Input className="order-product-quant" onChange={onChangeHandler} value={product.quant} type='number' />
            <p className="order-product-sum">{product.price} тенге</p>
            <button className="delet-product-button" onClick={deletButtonHandler}>
                <BsTrashFill size={20} color="#0A2344" />
            </button>
        </div>
    )
};
