import Dropdown from "../../Dropdown/Dropdown";
import ListingTitle from "../ListingTitle/ListingTitle";
import ListingTags from "../Tags/ListingTags";
import Data from "../../../Data/Listings.json";
import Author from "../Author/Author";

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
        </div>
      </div>
      <div className="listing-dropdowns">
        <ul className="dropdown-container">
          <Dropdown
            element={Listing}
            elementTitle={"Description"}
            elementListItems={Listing.description}
            key={Data.indexOf(Listing)}
          />
          <Dropdown
            element={Listing}
            elementTitle={"Équipement"}
            elementListItems={Listing.equipments}
            key={Listing.title}
          />
        </ul>
      </div>
    </>
  );
};

export default ListingDescription;
