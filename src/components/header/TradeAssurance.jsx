import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";

const TradeAssurance = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".menu-container")) {
      setActiveCategory(null);
      setActiveSubcategory(null);
    }
  };

  const showTradeDrop = () => {
    document.querySelector("#Principaletrade-assurance").classList.add("down");
  };

  const hideTradeDrop = () => {
    document
      .querySelector("#Principaletrade-assurance")
      .classList.remove("down");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      onMouseEnter={showTradeDrop}
      onMouseLeave={hideTradeDrop}
      id="Principaletrade-assurance"
      className="trade-assurance"
    >
      <div className="container">
        <div className="left">
          <img
            loading="lazy"
            src={require('../../assets/images/trad assurence-1.svg')}
            alt=""
          />

          <h1>Enjoy protection from payment to delivery.</h1>

          <Link>Learn More</Link>
        </div>

        <div className="right">
          <div>
            <Link to={"/Safe & easy payments"}>
              <img loading="lazy" src={require("../../assets/images/safty.png")} alt="" />
              <p>Safe & easy payments</p>

              <span>
                <GoArrowRight className="icon" />
              </span>
            </Link>
          </div>

          <div>
            <Link to={"/Money-back policy"}>
              <img
                loading="lazy"
                src={require("../../assets/images/money-back-1.png")}
                alt=""
              />
              <p>Money-back policy</p>
              <span>
                <GoArrowRight className="icon" />
              </span>
            </Link>
          </div>

          <div>
            <Link to={"/Shipping & logistics services"}>
              <img
                loading="lazy"
                src={require("../../assets/images/shipping.png")}
                alt=""
              />
              <p>Shipping & logistics services</p>
              <span>
                <GoArrowRight className="icon" />
              </span>
            </Link>
          </div>

          <div>
            <Link to={"/After-sales protections"}>
              <img
                loading="lazy"
                src={require('../../assets/images/repairs.png')}
                alt=""
              />
              <p>After-sales protections</p>
              <span>
                <GoArrowRight className="icon" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeAssurance;
