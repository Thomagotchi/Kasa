import BackgroundImage from "../../Assets/Images/falaise.jpg"
import Banner from "../../Components/Banner/Banner"
import './PageAcceuil.scss';

export function PageAcceuil () {
    return <div className="body-container">
        <Banner img={BackgroundImage} text='Chez vous, partout et ailleurs'/>
    </div>
}
