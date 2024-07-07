const ListingTitle = ({ Listing }) => {
  return (
    <>
      <div className="listing-title">{Listing.title}</div>
      <div className="listing-location">{Listing.location}</div>
    </>
  );
};

export default ListingTitle;
