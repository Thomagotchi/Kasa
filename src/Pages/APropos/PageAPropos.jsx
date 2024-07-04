import BackgroundImage from "../../Assets/Images/vallée.jpg"
import Banner from "../../Components/Banner/Banner"
import Dropdown from "../../Components/Dropdown/Dropdown"
import './PageAPropos.scss';

export function PageAPropos () {
    return <div className="body-container">
        <Banner img={BackgroundImage} />
        <Dropdown title={'Équipements'} info={'hi'}/>
    </div>
}