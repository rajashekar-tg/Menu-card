import React from "react";
import { useState } from "react";
export default function Shakes() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Godzilla Milkshake",
      img: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
      msg: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      price: 15,
    },

    {
      id: 2,
      name: "Quarantine Buddy",
      img: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
      msg: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      price: 15,
    },

    {
      id: 3,
      name: "Oreo Dream",
      img: "https://react-projects-5-menu.netlify.app/images/item-8.jpeg",
      msg: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
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
