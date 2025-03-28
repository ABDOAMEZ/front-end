import { useState, useEffect } from "react";
import { GET_data } from "../../services/data";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { GoGift } from "react-icons/go";


import {useGetCategoriesQuery} from "../../services/api/categorieApi";
 import { useGetProductsQuery } from "../../services/api/productsApi";

const HeaderBottom = () => {
  const [mainCate, setMaincate] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const { data: getCategorys } = useGetCategoriesQuery();
  
  const { data: products, isLoading: isProductsLoading, isError: isProductsError } = useGetProductsQuery();

  const showBtn = () => {
    document.querySelector("#menu").classList.toggle("show");
    document.querySelector("#close").classList.toggle("show");

    if (document.querySelector("#menu").className.animVal === "icon") {
      // console.log(document.querySelector("#menu").className.animVal);
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
    // setActiveCategory(sousCate.filter(sc => sc.id === category));
    // setActiveSubcategory(null);
    setActiveCategory(category);
    console.log(activeCategory)
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




  const  handelclick = () => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }





const fetchCategorys = async () => {
  const response = await getCategorys;
  console.log(response);
  setMaincate(
    response
  );
} 



  useEffect(() => {
    handelclick();

    fetchCategorys();

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
                {mainCate &&
                    mainCate.map(
                      (category) =>
                        category.parent_id === null && (
                          <li
                            key={category.id}
                            className="category-item"
                            // onMouseEnter={() => handleCategoryHover(category)}
                            onClick={() => handleCategoryClick(category)}
                          >
                            {category.name}
                          </li>
                        )
                    )}
                </div>


                
              </ul>

              {activeCategory && mainCate && (
                <ul
                  onMouseLeave={() => setActiveCategory(null)}
                  className="subcategory-menu"
                >
                  {mainCate
                    .filter(
                      (subcategory) =>
                        subcategory.parent_id === activeCategory.id
                    )
                    .map((subcategory) => {
                      const subcategoryProducts = products.filter(
                        (product) => product.category_id === subcategory.id
                      );

                      return (
                        <li
                          key={subcategory.id}
                          className="subcategory-item"
                          onClick={() => handleSubcategoryClick(subcategory)}
                        >
                          <Link to={`/subcategory/${subcategory.id}`}>
                            {subcategory.name}
                          </Link>
                          {/* Display products under the subcategory */}
                          <div className="prducts">
                            {subcategoryProducts.map((product) => (
                              <li
                                key={product.id}
                                className="product-item"
                              >
                                <Link to={`/product/${product.id}`}>
                                <img
                                  loading="lazy"
                                  src={product.image}
                                  // alt={p.name}
                                  className="product-image"
                                />
                                <span>
                                {product.name}
                                </span>
                                </Link>
                              </li>
                            ))}
                          </div>
                        </li>
                      );
                    })}
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
                <Link to={'/become seller'}>
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
