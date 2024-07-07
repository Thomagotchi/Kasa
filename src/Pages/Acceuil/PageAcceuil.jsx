import BackgroundImage from "../../Assets/Images/falaise.jpg";
import Banner from "../../Components/Banner/Banner";
import "./PageAcceuil.scss";
import Card from "../../Components/Card/Card";
import Listings from "../../Data/Listings.json";

export function PageAcceuil() {
  return (
    <div className="body-container">
      <Banner
        img={BackgroundImage}
        text="Chez vous, partout et ailleurs"
        key={1}
      />
      <div className="gallery">
        {Listings.map((element) => (
          <Card
            id={element.id}
            title={element.title}
            cover={element.cover}
            key={element.id}
          />
        ))}
      </div>
    </div>
  );
}
