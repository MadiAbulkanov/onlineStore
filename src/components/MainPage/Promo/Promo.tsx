import { Link } from 'react-router-dom';
import image from '../../../assets/promo-img1.jpg';
import {PROMO_CONFIG} from "./config.ts";

export const Promo = () => {
    return (
        <>
            <div className="promo-block">
                <div className="promo-card-drone">
                    <h1 className="promo-card-title">Эффективные решения для съемки</h1>
                    <Link className="button promo-card-button" to={'/drone'}>
                        Дроны
                    </Link>
                </div>
                <img className="promo-card-img" src={image} alt="promo"/>
            </div>
            <div className="promo-block-2">
                {PROMO_CONFIG.map((item) => (
                  <div key={item.className} className={`promo-card ${item.className}`} >
                      <h1 className="card-title">{item.title}</h1>
                      <Link className="button promo-card-button" to={item.link}>
                          В магазин
                      </Link>
                  </div>
                ))}
            </div>
        </>
    )
};
