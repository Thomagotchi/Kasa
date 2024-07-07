import { useState } from "react";
import leftArrow from "../../../Assets/Arrows/leftArrow.svg";
import rightArrow from "../../../Assets/Arrows/rightArrow.svg";
import "./Carousel.scss";

const Carousel = ({ Listing }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const PreviousImage = () => {
    !imageIndex
      ? setImageIndex(Listing.pictures.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  const NextImage = () => {
    imageIndex === Listing.pictures.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };

  return (
    <div className="carousel-container">
      <img
        src={Listing.pictures[imageIndex]}
        alt={Listing.title}
        key={Listing.id}
        className="carousel-image"
      />
      {Listing.pictures.length > 1 && (
        <div className="carousel-elements">
          <img
            src={leftArrow}
            alt="Left arrow."
            onClick={PreviousImage}
            className="carousel-arrow"
          />
          <div className="carousel-counter">
            {imageIndex + 1}/{Listing.pictures.length}
          </div>
          <img
            src={rightArrow}
            alt="Right arrow."
            onClick={NextImage}
            className="carousel-arrow"
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
