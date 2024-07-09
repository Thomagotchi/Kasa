import Dropdown from "../../Dropdown/Dropdown";
import ListingTitle from "../ListingTitle/ListingTitle";
import ListingTags from "../Tags/ListingTags";
import Data from "../../../Data/Listings.json";
import Author from "../Author/Author";
import Rating from "../Ratings/Ratings";
import "./ListingDescription.scss";

const ListingDescription = ({ Listing }) => {
  return (
    <>
      <div className="listing-description">
        <div className="listing-left-column">
          <ListingTitle Listing={Listing} />
          <ListingTags Listing={Listing} />
        </div>
        <div className="listing-right-column">
          <Author Listing={Listing} />
          <Rating Listing={Listing} />
        </div>
      </div>
      <div className="listing-dropdowns">
        <div className="dropdown-container">
          <Dropdown
            elementTitle={"Description"}
            elementListItems={Listing.description}
            key={Data.indexOf(Listing)}
          />
          <Dropdown
            elementTitle={"Équipement"}
            elementListItems={Listing.equipments}
            key={Listing.title}
          />
        </div>
      </div>
    </>
  );
};

export default ListingDescription;
