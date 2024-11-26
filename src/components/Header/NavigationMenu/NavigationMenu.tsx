import { Link } from "react-router-dom"
import './NavigationMenu.scss'

export const NavigationMenu = () => {
    return (
        <ul className="nav">
            <li className="nav-link">
                <Link className="link" to={'/'}>
                    <p className="link-text">Главная</p>
                </Link>
            </li>
            <li className="nav-link">
                <Link className="link" to={'/products'}>
                    <p className="link-text">Все товары</p>
                </Link>
            </li>
            <li className="nav-link">
                <Link className="link" to={'/drones'}>
                    <p className="link-text">Дроны</p>
                </Link>
            </li>
            <li className="nav-link">
                <Link className="link" to={'/cameras'}>
                    <p className="link-text">Камеры</p>
                </Link>
            </li>
            <li className="nav-link">
                <Link className="link" to={'/accessories'}>
                    <p className="link-text">Аксессуары</p>
                </Link>
            </li>
            <li className="nav-link">
                <Link className="link" to={'/about-us'}>
                    <p className="link-text">О нас</p>
                </Link>
            </li>
        </ul>
    )
}