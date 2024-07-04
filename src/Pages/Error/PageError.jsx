import { Link } from 'react-router-dom'
import './PageError.scss';

export function PageError () {
    return <div className="error-container">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retournez sur la page d'acceuil</Link>
    </div>
}