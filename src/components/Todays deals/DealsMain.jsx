import React from "react";
import DealsSection from "./DealsSection";
import "./DealsSection.css";

const bestsellers = [
  { name: "Projector HY300", image: require('../../assets/images/p1.avif'), price: 712.48, oldPrice: 1583.30, discount: 55 },
  { name: "Handheld R36S", image: require('../../assets/images/p1.avif'), price: 674.30, oldPrice: 1404.80, discount: 52 },
  { name: "Projector HY300", image: require('../../assets/images/p1.avif'), price: 712.48, oldPrice: 1583.30, discount: 55 },
  { name: "Handheld R36S", image: require('../../assets/images/p1.avif'), price: 674.30, oldPrice: 1404.80, discount: 52 },
];

const superDeals = [
  { name: "ANC Earbuds", image: require('../../assets/images/p1.avif'), price: 156.70, oldPrice: 326.44, discount: 52 },
  { name: "LED Strip Lights", image: require('../../assets/images/p1.avif'), price: 93.85, oldPrice: 170.64, discount: 45 },
  { name: "ANC Earbuds", image: require('../../assets/images/p1.avif'), price: 156.70, oldPrice: 326.44, discount: 52 },
  { name: "LED Strip Lights", image: require('../../assets/images/p1.avif'), price: 93.85, oldPrice: 170.64, discount: 45 },
];

const bigSave = [
  { name: "COLMI Smartwatch", image: require('../../assets/images/p1.avif'), price: 418.66, oldPrice: 872.22, discount: 48 },
  { name: "OLEVS Classic Watch", image: require('../../assets/images/p1.avif'), price: 331.37, oldPrice: 5523.17, discount: 94 },
  { name: "COLMI Smartwatch", image: require('../../assets/images/p1.avif'), price: 418.66, oldPrice: 872.22, discount: 48 },
  { name: "OLEVS Classic Watch", image: require('../../assets/images/p1.avif'), price: 331.37, oldPrice: 5523.17, discount: 94 },
];

const DealsMain = () => {
  return (
    <div className="app">
      <h1>Today's Deals</h1>
      <div className="deals-wrapper">
        <div className="deals-section">
          <DealsSection title="Bundle Deals" icon="🎁" deals={bestsellers} />
        </div>
        <div className="deals-section">
          <DealsSection title="SuperDeals" icon="⏳" deals={superDeals} />
        </div>
        <div className="deals-section">
          <DealsSection title="Big Save" icon="💰" deals={bigSave} />
        </div>
      </div>
    </div>
  );
};

export default DealsMain;

