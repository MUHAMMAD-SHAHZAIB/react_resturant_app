import React from "react";

const NavBar = ({ FilterItem, uniqueData }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {uniqueData.map(val => {
            return (
              <button
                className="btn-group__item"
                onClick={() => FilterItem(val)}
              >
                {val}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
