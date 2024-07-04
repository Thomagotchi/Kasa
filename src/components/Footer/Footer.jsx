import logo from '../../Assets/Logos/white-logo.svg';
import './Footer.scss';

export function PageFooter () {
    
    return <footer>
                <div className='footer-container'>
                    <img src={logo} alt="Logo Kasa blanc" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
        </footer>
  }