import { footerInfo } from '../../data/data'
import { ConnectionsSection } from './ConnectionsSection/ConnectionsSection'
import './Footer.scss'
import { InformationSection } from './InformationSection/InformationSection'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-sections">
                {footerInfo.map((infoNav, index) => (
                    <InformationSection infoNav={infoNav} key={index} />
                ))}
                <ConnectionsSection />
            </div>
            <div className="copyright-block"><p>© 2035 Гамма.</p></div>
        </footer>
    )
};