import BackgroundImage from "../../Assets/Images/vallée.jpg";
import Banner from "../../Components/Banner/Banner";
import Dropdown from "../../Components/Dropdown/Dropdown";
import "./PageAPropos.scss";
import Data from "../../Data/APropos.json";

export function PageAPropos() {
  return (
    <div className="about-container">
      <Banner img={BackgroundImage} />
      <ul className="dropdown-container">
        {Data.map((element) => (
          <Dropdown
            title={element.title}
            info={element.content}
            key={element.title}
          />
        ))}
      </ul>
    </div>
  );
}
