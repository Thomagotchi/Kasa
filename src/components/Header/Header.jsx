import { NavLink } from "react-router-dom";
import logo from '../../assets/logos/red-logo.svg';
import './Header.scss';

export function PageHeader () {
    return <header className="header">
            <div className="kasa-logo-red">
                <img src={logo} alt="Logo du site Kasa" className="red-logo"/>
            </div>
            <nav className="nav-menu">
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/A-Propos">A Propos</NavLink>
            </nav>
        </header>
  }
