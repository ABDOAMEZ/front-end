import React, { useState } from "react";
import "../../styles/trading.css";

const Section = () => {
  const [image, setImage] = useState("/bigmac.jpeg");

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <div className="section" >
      <h1 className="section-title">Streamline ordering from search to fulfillment, all in one place</h1>
      <div className="content-container">
        <div className="text-container">
          <div className="text-item"
            onMouseEnter={() => handleImageChange("/bigmac.jpeg")}
            onMouseLeave={() => handleImageChange("/bigmac.jpeg")}>
            <h2>Text Item 1</h2>
            <p>Description for the first item.</p>
          </div>
          <div className="text-item"
            onMouseEnter={() => handleImageChange("/Coca Cola.jpeg")}
            onMouseLeave={() => handleImageChange("/Coca Cola.jpeg")}>
            <h2>Text Item 2</h2>
            <p>Description for the second item.</p>
          </div>
          <div className="text-item"
            onMouseEnter={() => handleImageChange("/Chocolate Almond Croissants _ Moribyan.jpeg")}
            onMouseLeave={() => handleImageChange("/Chocolate Almond Croissants _ Moribyan.jpeg")}>
            <h2>Text Item 3</h2>
            <p>Description for the third item.</p>
          </div>
          <div className="text-item"
            onMouseEnter={() => handleImageChange("/Espresso Pictures _ Freepik.jpeg")}
            onMouseLeave={() => handleImageChange("/Espresso Pictures _ Freepik.jpeg")}>
            <h2>Text Item 4</h2>
            <p>Description for the fourth item.</p>
          </div>
        </div>
        <div className="image-container">
          <img src={image} alt="Displayed" className="displayed-image" />
        </div>
      </div>
    </div>
  );
};

export default Section;
