import React from "react";
import { useState } from "react";
export default function Lunch() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Egg Attack",
      img: "https://react-projects-5-menu.netlify.app/images/item-3.jpeg",
      msg: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
      price: 15,
    },

    {
      id: 2,
      name: "Diner Double",
      img: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
      msg: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
      price: 15,
    },

    {
      id: 3,
      name: "American Classic",
      img: "	https://react-projects-5-menu.netlify.app/images/item-9.jpeg",
      msg: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
      price: 15,
    },
  ]);
  return (
    <div className="container">
      <div>
        {items.map((item) => {
          const { id, name, msg, img, price } = item;
          return (
            <div className="image-container" key={id}>
              <div className="image-content">
                <img src={img} alt="not available" />
                <div className="image-info">
                  <h3 className="image-name">{name}</h3>
                  <h3 className="image-price">${price}</h3>
                </div>
                <hr />
                <p className="image-text">{msg}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
