import { NavLink } from "react-router-dom";
import logo from '../../assets/logos/red-logo.svg'
export function PageHeader () {
    return <header className="header">
            <div className="kasa-logo-red">
                <img src={logo} alt="Logo du site Kasa" className="red-logo"/>
            </div>
            <nav className="navbar">
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/A-Propos">A Propos</NavLink>
            </nav>
        </header>
  }


// export function Header () {
//     <header>
//       <nav>
//         <NavLink to="/">Acceuil</NavLink>
//         <NavLink to="/blog">Blog</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </nav>
//     </header>
//     return <header><h1>Kasa</h1></header>
// }