import { ConnectionsSection } from './ConnectionsSection/ConnectionsSection.tsx'
import { InformationSection } from './InformationSection/InformationSection.tsx'
import {FOOTER_INFO} from "./config.ts";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-sections">
                {FOOTER_INFO.map((infoNav, index) => (
                    <InformationSection infoNav={infoNav} key={index} />
                ))}
                <ConnectionsSection />
            </div>
            <p className="copyright-block">© 2035 Гамма.</p>
        </footer>
    )
};
