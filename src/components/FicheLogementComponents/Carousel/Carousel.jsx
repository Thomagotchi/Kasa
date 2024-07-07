import { useState } from "react";
import leftArrow from "../../../Assets/Arrows/leftArrow.svg";
import rightArrow from "../../../Assets/Arrows/rightArrow.svg";
import "./Carousel.scss";

const Carousel = ({ logement }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const PreviousImage = () => {
    imageIndex === 0
      ? setImageIndex(logement.pictures.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  const NextImage = () => {
    imageIndex === logement.pictures.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };

  return (
    <div className="carousel-container">
      <img
        src={logement.pictures[imageIndex]}
        alt={logement.title}
        key={logement.id}
        className="carousel-image"
      />
      {logement.pictures.length > 1 && (
        <div className="carousel-elements">
          <div className="carousel-counter">
            `{imageIndex + 1}/{logement.pictures.length}`
          </div>
          <img
            src={leftArrow}
            alt="Left arrow."
            onClick={PreviousImage}
            className="left-arrow"
          />
          <img
            src={rightArrow}
            alt="Right arrow."
            onClick={NextImage}
            className="right-arrow"
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
