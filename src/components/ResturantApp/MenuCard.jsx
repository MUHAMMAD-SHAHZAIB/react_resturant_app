import React from "react";

const MenuCard = ({ MenuData, FilterItem }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {MenuData.map(val => {
          const { id, image, name, category, price, description } = val;
          return (
            <div className="card-container}" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                  <img src={image} alt="image" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
