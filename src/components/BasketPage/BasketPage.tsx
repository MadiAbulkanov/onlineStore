import { useState } from 'react';
import './BasketPage.scss';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { OrderCard } from './OrderCard/OrderCard';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { removeFromAllBasket } from '../../store/slice/basket.slice';


export const BasketPage = () => {
    const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
    const navigate = useNavigate();
    const { basket } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();

    const checkoutButtonHandler = () => {
        setOrderSuccess(true);

        setTimeout(() => {
            setOrderSuccess(false);
            dispatch(removeFromAllBasket());
            navigate('/');
        }, 900)
    }

    return (
        <>
        {orderSuccess && (
            <Alert className="alert" severity="success">Заказ успешно оформлен!</Alert>
        )}
        <div className="basket-products-page">
            <div className="order-list">
                <h3 className="basket-products-page-title">Моя корзина</h3>
                <div className="order-products-list">
                 {basket.map((product) => (
                    <OrderCard key={product.id} product={product} />
                ))}   
                </div>
            </div>
            <div className="order-details">
                <h3 className="order-details-title">Детали заказа</h3>
                <div className="total">
                    <p>Сумма</p>
                    <p>25000 тенге</p>
                </div>
                <div className="total">
                    <p>Доставка</p>
                    <p>1000 тенге</p>
                </div>
                <div className="total">
                    <p>Итого</p>
                    <p>3500 тенге</p>
                </div>
                <button className="checkout-button" onClick={checkoutButtonHandler}>Оформить заказ</button>
            </div>
        </div>
        </>
    )
};