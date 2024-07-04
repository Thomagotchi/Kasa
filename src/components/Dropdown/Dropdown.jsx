import { useState } from "react"
import arrow from "../../Assets/Arrows/arrow.svg"
import "./Dropdown.scss"

const Dropdown = ({title, info}) => {
    const [active, setActive] = useState(true)

    function toggleActive() {
        setActive(!active)
    }

    return <div className="dropdown-box">
        <div className="dropdown-top-bar">
            <h2 className="dropdown-title">{title}</h2>
            <img src={ arrow } alt="dropdown arrow" onClick={toggleActive} className={`dropdown-arrow-${active}`}/>
        </div>
        <div className={`drowndown-info-${active}`}>
            <p className="dropdown-info-text">{info}</p>
        </div>
    </div>
}

export default Dropdown