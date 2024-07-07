import Carousel from "../../Components/FicheLogementComponents/Carousel/Carousel";

const FicheLogement = ({ Listing }) => {
  return (
    <div className="body-container">
      <Carousel logement={Listing} />
    </div>
  );
};

export default FicheLogement;
