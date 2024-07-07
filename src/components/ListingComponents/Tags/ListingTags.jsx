const CreateTag = ({ Tag }) => {
  return <p className="listing-tag">{Tag}</p>;
};

const ListingTags = ({ Listing }) => {
  return (
    <div className="listing-tags-container">
      {Listing.tags.map((tag) => (
        <CreateTag Tag={tag} key={tag} />
      ))}
    </div>
  );
};

export default ListingTags;
