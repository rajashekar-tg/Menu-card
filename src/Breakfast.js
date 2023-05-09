import React from "react";
import { useState } from "react";

export default function Breakfast() {
  const [breakFastitems, setbreakFastitems] = useState([
    {
      id: 1,
      name: "Buttermilk Pancakes",
      img: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
      msg: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
      price: 20,
    },
    {
      id: 2,
      name: "Bacon Overflow",
      img: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
      msg: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
      price: 15,
    },
    {
      id: 3,
      name: "Country Delight",
      img: "https://react-projects-5-menu.netlify.app/images/item-7.jpeg",
      msg: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
      price: 15,
    },
  ]);
  return (
    <div className="container">
      <div>
        {breakFastitems.map((item) => {
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
