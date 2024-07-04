import BackgroundImage from "../../Assets/Images/vallée.jpg"
import Banner from "../../Components/Banner/Banner"
import './PageAPropos.scss';

export function PageAPropos () {
    return <div className="body-container">
        <Banner img={BackgroundImage} />
    </div>
}