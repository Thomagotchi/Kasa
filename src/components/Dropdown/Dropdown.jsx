import { useState } from "react";
import arrow from "../../Assets/Arrows/arrow.svg";
import "./Dropdown.scss";

const PrintDescription = ({ elementListItem }) => {
  return <li>{elementListItem}</li>;
};

const Dropdown = ({ element, elementListItems, elementTitle }) => {
  const [active, setActive] = useState(false);

  function toggleActive() {
    setActive(!active);
  }

  return (
    <div className="dropdown-box">
      <div className="dropdown-top-bar">
        <h2 className="dropdown-title">{elementTitle}</h2>
        <img
          src={arrow}
          alt="dropdown arrow"
          onClick={toggleActive}
          className={`dropdown-arrow-${active}`}
        />
      </div>
      <div className={`dropdown-info-${active}`}>
        {elementListItems.map((elementListItem) => (
          <PrintDescription
            elementListItem={elementListItem}
            key={elementListItem.split(" ").slice(0, 1).join("")}
          />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
