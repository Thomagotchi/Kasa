import ActiveStar from "../../../Assets/RatingStars/RedStar.svg";
import InactiveStar from "../../../Assets/RatingStars/GreyStar.svg";
import "./Ratings.scss";

const Ratings = ({ Listing }) => {
  const activeStarsIndex = Listing.rating;
  const MaxRating = [1, 2, 3, 4, 5];

  return (
    <ul className="ratings-container">
      {MaxRating.map((Star) => {
        const checkStar = activeStarsIndex < Star ? InactiveStar : ActiveStar;

        return (
          <li key={Star}>
            <img src={checkStar} alt="Étoile"></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Ratings;
