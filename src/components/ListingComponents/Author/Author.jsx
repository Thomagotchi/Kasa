import "./Author.scss";

const Author = ({ Listing }) => {
  const NameSplit = Listing.host.name.split(" ");

  return (
    <div className="author-card-container">
      <div className="author-name-container">
        {NameSplit.map((element) => {
          return (
            <h2 className="author-name" key={element}>
              {element}
            </h2>
          );
        })}
      </div>
      <img
        src={Listing.host.picture}
        alt={Listing.host.name}
        className="author-picture"
      ></img>
    </div>
  );
};

export default Author;
