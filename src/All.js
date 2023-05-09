import React, { useState } from "react";
import "../src/All.css";
export default function All() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Buttermilk Pancakes",
      img: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
      msg: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
      price: 20,
    },
    {
      id: 2,
      name: "Godzilla Milkshake",
      img: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
      msg: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
      price: 15,
    },
    {
      id: 3,
      name: "Egg Attack",
      img: "https://react-projects-5-menu.netlify.app/images/item-3.jpeg",
      msg: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
      price: 15,
    },
    {
      id: 4,
      name: "Bacon Overflow",
      img: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
      msg: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
      price: 15,
    },
    {
      id: 5,
      name: "Quarantine Buddy",
      img: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
      msg: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      price: 15,
    },
    {
      id: 6,
      name: "Diner Double",
      img: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
      msg: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
      price: 15,
    },
    {
      id: 7,
      name: "Country Delight",
      img: "https://react-projects-5-menu.netlify.app/images/item-7.jpeg",
      msg: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
      price: 15,
    },
    {
      id: 8,
      name: "Oreo Dream",
      img: "https://react-projects-5-menu.netlify.app/images/item-8.jpeg",
      msg: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
      price: 15,
    },
    {
      id: 9,
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
