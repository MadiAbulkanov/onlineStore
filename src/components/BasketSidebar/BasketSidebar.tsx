import { useNavigate } from 'react-router-dom';
import { BasketProductCard } from './BasketProductCard/BasketProductCard';
import './BasketSidebar.scss';
import { useAppSelector } from '../../store/hook';
import { BsChevronRight } from "react-icons/bs";

interface SetSidedarOpen {
    closeSidebar: () => void;
}

export const BasketSidebar = ({ closeSidebar }: SetSidedarOpen) => {
    const navigate = useNavigate();
    const { basket } = useAppSelector((state) => state.basket);

    const sidebarChangeHandler = () => {
        closeSidebar();
    }

    const buttonChangeHandler = () => {
        closeSidebar();
        navigate(`/basket`);
    }

    return (
        <div className="basket-sidebar">
            <div className="basket-sidebar-title">
                <button className="sidebar-close-button" onClick={sidebarChangeHandler}>
                    <BsChevronRight size={25}/>
                </button>
                <h1 className="sidebar-title-text">Корзина</h1>
            </div>
            <div className="basket-products-card">
                {basket.map((product) => (
                    <BasketProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="products-sum">
                <h3>Сумма</h3>
                <p>25000 тенге</p>
            </div>
            <button className="basket-page-open-button" onClick={buttonChangeHandler}>Смотреть корзину</button>
        </div>
    )
};