import { useState } from "react";
import leftArrow from "../../../Assets/Arrows/leftArrow.svg";
import rightArrow from "../../../Assets/Arrows/rightArrow.svg";
import "./Carousel.scss";

const Carousel = ({ Listing }) => {
  const [prevImageIndex, setPrevImageIndex] = useState(
    Listing.pictures.length - 1
  );
  const [imageIndex, setImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  const checkPrevImageIndex = (elementIndex) => {
    return prevImageIndex === elementIndex ? "prev" : "";
  };

  const checkCurrentImageIndex = (elementIndex) => {
    return imageIndex === elementIndex ? "active" : "";
  };

  const checkNextImageIndex = (elementIndex) => {
    return nextImageIndex === elementIndex ? "next" : "";
  };

  const PreviousImage = () => {
    !prevImageIndex
      ? setPrevImageIndex(Listing.pictures.length - 1)
      : setPrevImageIndex(prevImageIndex - 1);

    !imageIndex
      ? setImageIndex(Listing.pictures.length - 1)
      : setImageIndex(imageIndex - 1);

    !nextImageIndex
      ? setNextImageIndex(Listing.pictures.length - 1)
      : setNextImageIndex(nextImageIndex - 1);

    console.log(prevImageIndex);
    console.log(imageIndex);
    console.log(nextImageIndex);
  };

  const NextImage = () => {
    prevImageIndex === Listing.pictures.length - 1
      ? setPrevImageIndex(0)
      : setPrevImageIndex(prevImageIndex + 1);

    imageIndex === Listing.pictures.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);

    nextImageIndex === Listing.pictures.length - 1
      ? setNextImageIndex(0)
      : setNextImageIndex(nextImageIndex + 1);

    console.log(prevImageIndex);
    console.log(imageIndex);
    console.log(nextImageIndex);
  };

  return (
    <div className="carousel-container">
      {Listing.pictures.map((element) => {
        return (
          <img
            src={element}
            alt={Listing.title}
            key={Listing.pictures.indexOf(element)}
            className={`carousel-image ${checkPrevImageIndex(
              Listing.pictures.indexOf(element)
            )}${checkCurrentImageIndex(
              Listing.pictures.indexOf(element)
            )}${checkNextImageIndex(Listing.pictures.indexOf(element))}`}
          />
        );
      })}

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

// const Carousel = ({ Listing }) => {
//   const [imageIndex, setImageIndex] = useState(0);

//   const slides = [];
//   Listing.pictures.map((element) => {
//     slides.push(element);
//   });

//   const PreviousImage = () => {
//     !imageIndex
//       ? setImageIndex(Listing.pictures.length - 1)
//       : setImageIndex(imageIndex - 1);
//   };

//   const NextImage = () => {
//     imageIndex === Listing.pictures.length - 1
//       ? setImageIndex(0)
//       : setImageIndex(imageIndex + 1);
//   };

//   return (
//     <div className="carousel-container">
//       <img
//         src={Listing.pictures[imageIndex]}
//         alt={Listing.title}
//         key={Listing.id}
//         className="carousel-image"
//       />
//       {Listing.pictures.length > 1 && (
//         <div className="carousel-elements">
//           <img
//             src={leftArrow}
//             alt="Left arrow."
//             onClick={PreviousImage}
//             className="carousel-arrow"
//           />
//           <div className="carousel-counter">
//             {imageIndex + 1}/{Listing.pictures.length}
//           </div>
//           <img
//             src={rightArrow}
//             alt="Right arrow."
//             onClick={NextImage}
//             className="carousel-arrow"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

export default Carousel;
