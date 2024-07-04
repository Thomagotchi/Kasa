import { NavLink } from "react-router-dom";
import logo from '../../Assets/Logos/red-logo.svg';
import './Header.scss';

export function PageHeader () {
    return <header className="header">
            <img src={logo} alt="Logo du site Kasa" className="red-logo"/>
            <nav className="nav-menu">
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/A-Propos">A Propos</NavLink>
            </nav>
        </header>
  }
