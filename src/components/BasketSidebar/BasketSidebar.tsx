import { useNavigate } from 'react-router-dom';
import { BasketProductCard } from './BasketProductCard/BasketProductCard';
import './BasketSidebar.scss';
import { useAppSelector } from '../../store/hook';
import { BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from 'react';

interface SetSidebarOpen {
    closeSidebar: () => void;
    open: boolean;
}

export const BasketSidebar = ({ closeSidebar, open }: SetSidebarOpen) => {
    const navigate = useNavigate();
    const { basket } = useAppSelector((state) => state.basket);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigateToBasket = () => {
        closeSidebar();
        navigate(`/basket`);
    };

    useEffect(() => {
        const totPrice = basket.reduce((accumulator, product) => accumulator + product.price, 0);
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
            <div className="products-sum">
                <h3>Сумма</h3>
                <p>{totalPrice} тенге</p>
            </div>
            <button className="basket-page-open-button" onClick={navigateToBasket}>Смотреть корзину</button>
        </div>
    )
};