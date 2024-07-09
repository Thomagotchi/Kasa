import "./ListingTags.scss";

const CreateTag = ({ Tag }) => {
  return (
    <li key={Tag} className="listing-tag">
      {Tag}
    </li>
  );
};

const ListingTags = ({ Listing }) => {
  return (
    <ul className="listing-tags-container">
      {Listing.tags.map((tag) => (
        <CreateTag Tag={tag} key={tag} />
      ))}
    </ul>
  );
};

export default ListingTags;
