import { useState } from "react";
import arrow from "../../Assets/Arrows/arrow.svg";
import "./Dropdown.scss";

const PrintDescription = ({ elementListItem }) => {
  return <li>{elementListItem}</li>;
};

const Dropdown = ({ elementListItems, elementTitle }) => {
  const [active, setActive] = useState(true);

  function toggleActive() {
    setActive(!active);
  }

  return (
    <div className={`dropdown-box ${active}`}>
      <div className="dropdown-top-bar">
        <h2 className="dropdown-title">{elementTitle}</h2>
        <img
          src={arrow}
          alt="dropdown arrow"
          onClick={toggleActive}
          className={`dropdown-arrow-${active}`}
        />
      </div>
      <ul className={`dropdown-info ${active}`}>
        {elementListItems.map((elementListItem) => (
          <PrintDescription
            elementListItem={elementListItem}
            key={elementListItem.split(" ").slice(0, 1).join("")}
          />
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
