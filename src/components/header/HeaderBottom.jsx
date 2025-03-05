import { useState, useEffect } from "react";
import { GET_data } from "../../services/data";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { GoGift } from "react-icons/go";

const HeaderBottom = () => {
  const [data] = useState(GET_data);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const showBtn = () => {
    document.querySelector("#menu").classList.toggle("show");
    document.querySelector("#close").classList.toggle("show");

    if (document.querySelector("#menu").className.animVal === "icon") {
      console.log(document.querySelector("#menu").className.animVal);
      document.querySelector("#ctaegories").classList.add("show");
      document.querySelector("#categories-dropDown").classList.add("show");
    }
    if (document.querySelector("#menu").className.animVal === "icon show") {
      document.querySelector("#ctaegories").classList.remove("show");
      document.querySelector("#categories-dropDown").classList.remove("show");
    }
  };

  //! pricipal menu fnctions
  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(
      activeSubcategory === subcategory ? null : subcategory
    );
  };

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

  const showHelpDrop = () => {
    document.querySelector("#Principaletrade-help").classList.add("down");
  };

  const hideHelpDrop = () => {
    document.querySelector("#Principaletrade-help").classList.remove("down");
  };

  const hideSubCMenu = (e) => {
    e.style.display = 'none';
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeCategory||activeSubcategory]);

  return (
    <div className="header-bottom">
      <div className="header-bottom-container">
        <div id="ctaegories" className="ctaegories">
          <div className="menu-dropDown">
            <p onClick={showBtn}>
              <span>
                <AiOutlineMenu id="menu" className="icon show" />
                <MdClose id="close" className="icon" />
              </span>
              <b>Browse Categories</b>
            </p>

            <div id="categories-dropDown" className="menu-container">
              {/* Category Menu */}
              <ul className="category-menu">
                <div>
                {data.map((category) => (
                  <li
                    key={category.id}
                    className="category-item"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.name}
                  </li>
                ))}
                </div>


                
              </ul>

              {/* Subcategories Menu */}
              {activeCategory && (
                <ul onMouseLeave={e => hideSubCMenu(e.target)} className="subcategory-menu">
                  {activeCategory.subcategories.map((subcategory) => (
                    <li
                      key={subcategory.id}
                      className="subcategory-item"
                      onMouseEnter={() => handleSubcategoryClick(subcategory)}
                    >
                      <Link to={`/${subcategory.name}`}>
                        {subcategory.name}
                      </Link>

                      <div className="prducts">
                        {
                          subcategory.products.map(p => (
                            <Link to={p.name}>
                              <img
                          loading="lazy"
                          src={p.image}
                          // alt={p.name}
                          className="product-image"
                        />
                        <span>
                          {p.name}
                        </span>
                            </Link>

                          ))
                        }
                      </div>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>
        </div>

        <div className="header-bottom-center">
          <div className="center-cntainer">
            <div className="item one">
              <p>
                <Link>
                Today's Deals
                </Link>
              </p>
            </div>

            <div
              onMouseLeave={hideTradeDrop}
              onMouseEnter={showTradeDrop}
              className="item"
            >
              <p>
                Trade Assurance
                <span></span>
              </p>
            </div>

            <div
              onMouseLeave={hideHelpDrop}
              onMouseEnter={showHelpDrop}
              className="item"
            >
              <p>Help Center</p>
            </div>

            <div className="item last">
              <p>
                <Link>
                Become a Seller
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="gifts-card">
          <button>
            <Link to={"/gifts cards"}>
              Gifts Cards
              <span>
                <GoGift className="icon" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
