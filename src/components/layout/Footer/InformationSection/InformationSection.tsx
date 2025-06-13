import { Link } from 'react-router-dom';
import { InfoNav } from '../../../../types/IFooterInfoNav.interface';

export const InformationSection = ({ infoNav }: { infoNav: InfoNav }) => {
    return (
        <div className='shop-section'>
            <h3 className='section-title'>{infoNav.title}</h3>
            <ul className='section-nav'>
                {infoNav.links.map((link, index) => (
                    <li className='section-nav-link' key={index}>
                        <Link className="section-link" to={`/${link.link}`}>
                            <p className="section-link-text">{link.text}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};
