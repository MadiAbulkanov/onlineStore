import { Link } from 'react-router-dom';
import image from '../../../assets/promo-img1.jpg';
import './PromoBlock.scss'

export const PromoBlock = () => {
    return (
        <>
        <div className="content-block">
            <div className="promo-card-1">
                <h1 className="promo-card-title">Эффективные решения для съемки</h1>
                <Link className="link" to={'/drones'}>
                    <button className="promo-card-button">Дроны</button>
                </Link>
            </div>
            <img className="promo-card-img" src={image} alt="promo"/>
        </div>
        <div className="content-block-2">
            <div className="promo-card-2">
                <h1 className="card-title">Коллекция термальных камер</h1>
                <Link className="link" to={'/cameras'}>
                    <button className="promo-card-button">В магазин</button>
                </Link>
            </div>
            <div className="promo-card-3">
                <h1 className="card-title">Аксессуары для дронов</h1>
                <Link className="link" to={'/accessories'}>
                    <button className="promo-card-button">В магазин</button>
                </Link>
            </div>
        </div>
        </>
    )
}