import "./Author.scss";

const Author = ({ Listing }) => {
  return (
    <div className="author-card-container">
      <h3 className="author-name">{Listing.host.name}</h3>
      <img
        src={Listing.host.picture}
        alt={Listing.host.name}
        className="author-picture"
      ></img>
    </div>
  );
};

export default Author;
