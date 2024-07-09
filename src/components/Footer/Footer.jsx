import logo from "../../Assets/Logos/white-logo.svg";
import "./Footer.scss";

export function PageFooter() {
  const currentDate = new Date();
  const getDate = currentDate.getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <img src={logo} alt="Logo Kasa blanc" />
        <p>© {getDate} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
