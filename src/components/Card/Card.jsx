import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={id} className="gallery-card">
      <div className="cover-container">
        <img src={cover} alt={title} className="gallery-image" />
      </div>
      <div className="card-title-container">
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
