import "./Banner.scss";

const Banner = ({ img, text }) => {
  if (!text) {
    return (
      <div className="banner-container">
        <img
          src={img}
          alt="Panoramique d'une vallée."
          className="banner-photo-propos"
        />
      </div>
    );
  } else {
    return (
      <div className="banner-container">
        <img
          src={img}
          alt="Panoramique de falaises."
          className="banner-photo"
        />
        <div className="banner-title">
          <h1 className="banner-text">{text}</h1>
        </div>
      </div>
    );
  }
};

export default Banner;
