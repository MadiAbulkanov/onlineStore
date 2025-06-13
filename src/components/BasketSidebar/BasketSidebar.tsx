import { useNavigate } from 'react-router-dom';
import { BasketProductCard } from './BasketProductCard/BasketProductCard.tsx';
import { BsChevronRight } from "react-icons/bs";
import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

interface BasketSidebarProps {
    closeSidebar: () => void;
    open: boolean;
}

export const BasketSidebar: FC<BasketSidebarProps> = ({ closeSidebar, open }) => {
    const navigate = useNavigate();
    const { basket } = useAppSelector((state) => state.basket);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigateToBasket = () => {
        closeSidebar();
        navigate(`/basket`);
    };

    useEffect(() => {
        const totPrice = basket.reduce((accumulator, product) => {
            return accumulator + (product.price * product.quant);
        }, 0);

        setTotalPrice(totPrice);
    }, [basket])

    return (
        <div className={`${open ? 'basket-sidebar open' : 'basket-sidebar'}`}>
            <div className="basket-sidebar-title">
                <button className="sidebar-close-button" onClick={closeSidebar}>
                    <BsChevronRight size={25} />
                </button>
                <h1 className="sidebar-title-text">Корзина</h1>
            </div>
            <div className="basket-products-card">
                {basket.map((product) => (
                    <BasketProductCard key={product.id} product={product} />
                ))}
                {basket.length < 1 && <h3>Корзина пуста</h3>}
            </div>
            <div>
                <div className="products-sum">
                    <h3>Сумма</h3>
                    <p>{totalPrice} тенге</p>
                </div>
                <button className="button basket-page-open-button" onClick={navigateToBasket}>Смотреть корзину</button>
            </div>
        </div>
    )
};
