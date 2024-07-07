import Carousel from "../../Components/ListingComponents/Carousel/Carousel";
import ListingDescription from "../../Components/ListingComponents/ListingDescription/ListingDescription";

const FicheLogement = ({ Listing }) => {
  return (
    <div className="body-container">
      <Carousel Listing={Listing} />
      <ListingDescription Listing={Listing} />
    </div>
  );
};

export default FicheLogement;
