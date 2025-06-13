import { Link } from "react-router-dom";
import { NavigationMenu } from "./NavigationMenu/NavigationMenu.tsx";
import { BsFillBasket2Fill } from "react-icons/bs";

interface SetSidedarOpen {
    closeSidebar: () => void;
}

export const Header = ({ closeSidebar }: SetSidedarOpen) => {

    const sidebarChangeHandler = () => {
        closeSidebar();
    }

    return (
        <header className="header">
            <div className="header-wrap">
                <Link className="header-link" to={'/'}>
                    <h1 className="logo-name">ГАММА</h1>
                    <p className="logo-text">Дроны и экшен-камеры</p>
                </Link>
                <button className="basket" onClick={sidebarChangeHandler}>
                    <BsFillBasket2Fill className="basket-logo" size={24} />
                </button>
            </div>
            <div className="navigation-menu">
                <NavigationMenu />
            </div>
        </header>
    )
}
