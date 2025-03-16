import { useLoginMutation, useRegisterMutation } from "../../services/api/userApi";

import { useState, useEffect } from "react";
import { GET_data } from "../../services/data";

import { Link } from "react-router-dom";

import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { TbCameraSearch } from "react-icons/tb";
import { AiOutlineInstagram, AiFillTikTok } from "react-icons/ai";
import { LiaFacebookF, LiaTwitter } from "react-icons/lia";
import { MdClose } from "react-icons/md";
import { CiTrash } from "react-icons/ci";

import SearchContainer from "./SearchByCameraDrop";


const DropsDown = () => {



  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const [data] = useState(GET_data);






  const cartDropHide = () => {
    let cartDrop = document.querySelector("#cartDrop");
    let dropContainer = cartDrop.parentElement;
    // console.log(cartDrop,dropContainer);
    cartDrop.classList.remove("show");

    setTimeout(() => {
      dropContainer.classList.remove("show");
    }, 900);
  };

  const showMenuLinks = () => {
    // console.log(document.querySelector('#menuBtn'),document.querySelector('#menu-links'),document.querySelector('#ctegoriesBtn'),document.querySelector('#categories'))

    document.querySelector("#menuBtn").className = "show";
    document.querySelector("#menu-links").classList.add("show");

    document.querySelector("#ctegoriesBtn").className = "";
    document.querySelector("#categories").classList.remove("show");
  };

  const showCategories = () => {
    // console.log(document.querySelector('#menuBtn'),document.querySelector('#menu-links'),document.querySelector('#ctegoriesBtn'),document.querySelector('#categories'))

    document.querySelector("#menuBtn").className = "";
    document.querySelector("#menu-links").classList.remove("show");

    document.querySelector("#ctegoriesBtn").className = "show";
    document.querySelector("#categories").classList.add("show");
  };

  const dropTrade = (e) => {
    e.parentElement.parentElement.children[1].classList.toggle("show");
  };

  const hideMenuDrop = () => {
    let dropMenu = document.querySelector("#drop-menu");
    let dropContainer = dropMenu.parentElement;

    dropMenu.classList.remove("show");
    setTimeout(() => {
      dropContainer.classList.remove("show");
    }, 900);
  };



  // const handleClickOutside = (event) => {
  //   if (!event.target.closest(".menu-container")) {
  //     setActiveCategory(null);
  //     setActiveSubcategory(null);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  const hideAll = (ele) => {
    
    if(ele.target.classList.value === "dropsDown-container show" ){
      hideMenuDrop();
      cartDropHide();
      searchCamerDrop();
      // console.log(ele.target.classList)
    }
  }

  const searchCamerDrop = () => {
    document.querySelector('#dropsDown_search-container').classList.toggle("down");
    // console.log(document.querySelector('#search-container'))
  }

  
  
  

  return (
    <div onClick={e => hideAll(e)} className="dropsDown-container">
      

      <div id="cartDrop" className="cart-dropDown">
        <div className="cart-dropDown_headre">
          <div>
            <span onClick={cartDropHide}>
              <MdClose className="icon" />
            </span>
            <p>
              You have <span>(1 items)</span> in your bag
            </p>
          </div>
        </div>

        <div className="content-cart_container">
          <div className="cart-item">
            <img
              loading="lazy"
              src={require("../../assets/images/products/product1.jpg")}
              alt=""
            />
            <div className="details">
              <h4>Product Name</h4>
              <div>
                <p>Price: $100</p>
                <p className="quantite">Quantity: 1</p>
              </div>
            </div>
            <div className="remove">
              <CiTrash className="icon" />
            </div>
          </div>
        </div>
      </div>

      <div id="drop-menu" className="drop-menu">
        <div className="menu-header">
          <div className="close-btn">
            <span onClick={hideMenuDrop}>
              <MdClose className="icon" />
            </span>
          </div>

          <div className="search-bar">
            <form action="">
              <input type="search" name="" id="" placeholder="Search in..." />
              <span>
                <TbCameraSearch onClick={searchCamerDrop} className="icon" />
              </span>

              <button type="button">
                <IoIosSearch className="icon" />
              </button>
            </form>

            <SearchContainer id="dropsDown_search-container" />
          </div>
        </div>

        <div className="menu-body">
          <div className="menuBody-content">
            <div className="meny-btns">
              <button id="menuBtn" className="show" onClick={showMenuLinks}>
                Menu
              </button>

              <button id="ctegoriesBtn" onClick={showCategories}>
                Categories
              </button>
            </div>

            <div className="center">
              <div id="categories" className="menuCategories-links">
                {
                  // console.log(data)
                  data.map((c) => (
                    <div key={c.id} className="catrgorie-item">
                      <div
                        onClick={(e) => dropTrade(e.target)}
                        className="categories-btn"
                      >
                        <h3>
                          {c.name}
                          <span>
                            <IoIosArrowDown className="icon" />
                          </span>
                        </h3>
                      </div>

                      <div className="drop">
                        <ul>
                          {c.subcategories.map((sc) => (
                            <li key={sc.id}>
                              <Link to={"/Category 1.1"}>
                                {sc.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                }
              </div>

              <div id="menu-links" className="other-Links show">
                <div className="todays-deals">
                  <div>
                    <h3>
                      <Link to={"/tday's deals"}>Today's Deals</Link>
                    </h3>
                  </div>
                </div>

                <div className="trade-assurance">
                  <div onClick={(e) => dropTrade(e.target)}>
                    <h3>
                      Trade Assurance
                      <span>
                        <IoIosArrowDown className="icon" />
                      </span>
                    </h3>
                  </div>

                  <div className="drop">
                    <ul>
                      <li>
                        <Link to={"/Safe & easy payments"}>
                          Safe & easy payments
                        </Link>
                      </li>

                      <li>
                        <Link to={"/Money-back policy"}>Money-back policy</Link>
                      </li>

                      <li>
                        <Link to={"/Shipping & logistics services"}>
                          Shipping & logistics services
                        </Link>
                      </li>

                      <li>
                        <Link to={"/After-sales protections"}>
                          After-sales protections
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="help-center">
                  <div onClick={(e) => dropTrade(e.target)}>
                    <h3>
                      Help Center
                      <span>
                        <IoIosArrowDown className="icon" />
                      </span>
                    </h3>
                  </div>

                  <div className="drop">
                    <ul>
                      <li>
                        <Link to={"/For buyers"}>For buyers</Link>
                      </li>

                      <li>
                        <Link to={"/For suppliers"}>For suppliers</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="becom-seller">
                  <div>
                    <h3>
                      <Link to={"/Simple_form"}>Become Seller</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-footer">
          <div className="social-links">
            <Link to={"/Instagram"}>
              <AiOutlineInstagram className="icon" />
            </Link>
            <Link to={"/Facebook"}>
              <LiaFacebookF className="icon" />
            </Link>
            <Link to={"/Twitter"}>
              <LiaTwitter className="icon" />
            </Link>
            <Link to={"/TikTok"}>
              <AiFillTikTok className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropsDown;
