import { Link } from "react-router-dom";
import "./PageError.scss";

export function PageError() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <div className="error-info-container">
        <h2>Oups! La page que</h2>
        <h2>vous demandez n'existe pas.</h2>
      </div>
      <Link to="/">Retournez sur la page d'acceuil</Link>
    </div>
  );
}
