import "./Banner.scss";

const Banner = ({ img, text1, text2 }) => {
  if (!text1 || !text2) {
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
          <h1 className="banner-text">{text1}</h1>
          <h1 className="banner-text second-text">{text2}</h1>
        </div>
      </div>
    );
  }
};

export default Banner;
