import { Link } from "react-router-dom"
import {NAVIGATION_MENU_CONFIG} from "./config.ts";

export const NavigationMenu = () => {
    return (
        <ul className="nav">
          {NAVIGATION_MENU_CONFIG.map((item) => (
            <li key={item.label} className="nav-link">
              <Link className="link" to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
    )
}
