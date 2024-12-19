import '../Footer.scss';
import './ConnectionsSection.scss';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialVkontakte } from "react-icons/sl";

export const ConnectionsSection = () => {
    return (
        <div className='shop-section'>
            <h3 className='section-title'>Связь</h3>
            <div>
                <p className="connection-section-link-text">Служба клиентов:</p>
                <p className="connection-section-link-text">+7 123 456-78-90</p>
                <p className="connection-section-link-text">info@mysite.com</p>
                <div className="social-media">
                    <a href="#" className="social-media-icon">
                        <SlSocialInstagram size={20} color='#1E68CB'/>
                    </a>
                    <a href="#" className="social-media-icon">
                        <SlSocialFacebook size={20} color='#1E68CB' />
                    </a>
                    <a href="#" className="social-media-icon">
                        <SlSocialTwitter size={20} color='#1E68CB' />
                    </a>
                    <a href="#" className="social-media-icon">
                        <SlSocialVkontakte size={23} color='#1E68CB' />
                    </a>
                </div>
            </div>
        </div>
    )
};