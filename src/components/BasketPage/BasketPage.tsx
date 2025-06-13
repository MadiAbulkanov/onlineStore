import { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { OrderCard } from './OrderCard/OrderCard.tsx';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { removeFromAllBasket } from '../../store/slice/basket.ts';

export const BasketPage = () => {
    const [orderSuccess, setOrderSuccess] = useState<boolean>(false);
    const [orderError, setOrderError] = useState<boolean>(false);
    const navigate = useNavigate();
    const { basket } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();
    const [totalSum, setTotalSum] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const checkoutButtonHandler = () => {
        if (basket.length > 0) {
            setOrderSuccess(true);

            setTimeout(() => {
                setOrderSuccess(false);
                dispatch(removeFromAllBasket());
                navigate('/');
            }, 900)
        } else {
            setOrderError(true);

            setTimeout(() => {
                setOrderError(false);
            }, 900)
        }
    }

    useEffect(() => {
        if (basket.length > 0) {
            const sum = basket.reduce((accumulator, product) => {
                return accumulator + (product.price * product.quant);
            }, 0);
            const totPrice = sum + 2000;
            setTotalSum(sum);
            setTotalPrice(totPrice);
        } else {
            setTotalSum(0);
            setTotalPrice(0);
        }
    }, [basket]);

    return (
        <>
            {orderSuccess && (
                <Alert className="alert" severity="success">Заказ успешно оформлен!</Alert>
            )}
            {orderError && (
                <Alert className="alert" severity="error">Ошибка оформления заказа!</Alert>
            )}
            {basket.length > 0 ? (
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
                            <p>{totalSum} тенге</p>
                        </div>
                        <div className="total">
                            <p>Доставка</p>
                            <p>2000 тенге</p>
                        </div>
                        <div className="total">
                            <p>Итого</p>
                            <p>{totalPrice} тенге</p>
                        </div>
                        <button className="button checkout-button" onClick={checkoutButtonHandler}>Оформить заказ</button>
                    </div>
                </div>
            ) : (
                <div className="basket-products-empty">
                    <h2>Моя корзина</h2>
                    <h3 className="empty-basket-text">Корзина пуста</h3>
                </div>
            )}
        </>
    )
};
