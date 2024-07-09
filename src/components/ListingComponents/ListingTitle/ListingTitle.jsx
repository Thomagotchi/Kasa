import "./ListingTitle.scss";

const ListingTitle = ({ Listing }) => {
  return (
    <>
      <h1 className="listing-title">{Listing.title}</h1>
      <p className="listing-location">{Listing.location}</p>
    </>
  );
};

export default ListingTitle;
