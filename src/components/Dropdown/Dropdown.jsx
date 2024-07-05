import { useState } from "react";
import arrow from "../../Assets/Arrows/arrow.svg";
import "./Dropdown.scss";

const Dropdown = ({ title, info }) => {
  const [active, setActive] = useState(true);

  function toggleActive() {
    setActive(!active);
  }

  return (
    <li className="dropdown-box">
      <div className="dropdown-top-bar">
        <h2 className="dropdown-title">{title}</h2>
        <img
          src={arrow}
          alt="dropdown arrow"
          onClick={toggleActive}
          className={`dropdown-arrow-${active}`}
        />
      </div>
      <div className={`dropdown-info-${active}`}>
        <p className="dropdown-info-text">{info}</p>
      </div>
    </li>
  );
};

export default Dropdown;
