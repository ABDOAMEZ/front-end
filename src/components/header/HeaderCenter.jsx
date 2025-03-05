import { Link } from "react-router-dom";
import { useState } from "react";
import "./sinfinUp.css";
import countryList from "../../services/countries";

import Select from "react-select";

import { GET_data } from "../../services/data";
import { UserTimezone } from "../../utils/getTimeZone";

import { IoIosSearch } from "react-icons/io";
import { TbTruckDelivery, TbCameraSearch } from "react-icons/tb";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { LiaShoppingCartSolid, LiaHeart } from "react-icons/lia";
import { TfiDashboard } from "react-icons/tfi";
import { BsBoxSeam } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { SlEnvolopeLetter } from "react-icons/sl";

import SearchContainer from "./SearchByCameraDrop";

const HeaderCenter = () => {
  const [categorie, setCategorie] = useState("all categories");
  const [data] = useState(GET_data);
  const [selectedCountry, setSelectedCountry] = useState({
    label: UserTimezone(),
    value: countryList.find((e) => e.label === UserTimezone()).value,
    flag: countryList.find((e) => e.label === UserTimezone()).flag,
  });
  const [zipCode, setZipCode] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  console.log(categorie);

  const cartDropShow = () => {
    let cartDrop = document.querySelector("#cartDrop");
    let dropContainer = cartDrop.parentElement;
    // console.log(cartDrop,dropContainer);
    dropContainer.classList.add("show");

    setTimeout(() => {
      cartDrop.classList.add("show");
    }, 50);
  };

  const showDrop = () => {
    document.getElementById("");
    let drop = document.querySelector("#accountDrop");
    let dropContainer = drop.parentElement;

    dropContainer.classList.add("show");

    setTimeout(() => {
      drop.classList.add("show");
    }, 50);
  };

  const showMenuDrop = () => {
    let dropMenu = document.querySelector("#drop-menu");
    let dropContainer = dropMenu.parentElement;

    dropContainer.classList.add("show");

    setTimeout(() => {
      dropMenu.classList.add("show");
    }, 50);
  };

  const searchCamerDrop = () => {
    document
      .querySelector("#headerCenter_search-container")
      .classList.add("down");
  };



  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img
              loading="lazy"
              src={require("../../assets/images/reallogo.png")}
              alt="logo"
            />
          </Link>
          <div className="shipping">
            <span>
              <TbTruckDelivery className="icon" /> To :{" "}
            </span>
            <div className="ship_container">
              <div>
                <img src={selectedCountry.flag} alt="" />
                <span>
                  {zipCode}, {selectedCountry.value}
                </span>
              </div>

              <div>
                <div className="shipng_form_container">
                  <div className="ship-info">
                    <h3>Specify your location</h3>
                    <p>Shipping options and fees vary based on your location</p>
                  </div>

                  <div className="shop-form">
                    <div className="flex flex-col items-center gap-4 p-4">
                      <Select
                        options={countryList}
                        getOptionLabel={(e) => (
                          <div className="flex items-center">
                            <img
                              src={e.flag}
                              alt={e.label}
                              className="w-2 h-2 mr-2 rounded-sm"
                            />
                            {e.label}
                          </div>
                        )}
                        onChange={handleChange}
                        placeholder="Select a country..."
                        className="w-80"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your Zip City Code"
                      onChange={(z) => setZipCode(z.target.value)}
                    />

                  </div>
                </div>
              </div>
            </div>

            <div className="shipingContainer">
              {/* shiping drop down here */}
            </div>
          </div>
        </div>

        <div className="header-center">
          <form action="">
            <input type="search" placeholder="what are you Looking for..." />
            <span>
              <TbCameraSearch onClick={searchCamerDrop} className="icon" />
            </span>
            <select onChange={(e) => setCategorie(e.target.value)}>
              <option value={""}>All Categories</option>
              {data.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <button type="submit">
              <IoIosSearch className="icon" />
            </button>

            <SearchContainer id="headerCenter_search-container" />
          </form>
        </div>

        <div className="header-right">
          <div className="account">
            <Link>
              <AiOutlineUser className="icon" />
              <p>Account</p>
            </Link>

            <div className="SinfinUp">
              <div className="SinfinUpConatiner">
                <div className="SinginUpBtns">
                  <Link onClick={showDrop}>Login</Link>
                  <Link onClick={showDrop}>Sign Up</Link>
                </div>
                <span id="span"> or </span>

                <div className="quickEnter">
                  <Link>
                    <img
                      id="facbook"
                      loading="lazy"
                      src={require("../../assets/images/Facebook_logo_(square).png")}
                      alt=""
                    />
                  </Link>
                  <Link>
                    <img
                      loading="lazy"
                      src={require("../../assets/images/google.png")}
                      alt=""
                    />
                  </Link>
                  <Link>
                    <img
                      loading="lazy"
                      src={require("../../assets/images/appel.png")}
                      alt=""
                    />
                  </Link>
                </div>

                <p id="para">
                  By signing in via social media, I agree to{" "}
                  <Link>the Alibaba.com Free Membership Agreement</Link> and{" "}
                  <Link>Privacy Policy</Link>, and to receive emails about the
                  platform’s products and services.
                </p>

                <div className="actions">
                  <ul id="ul">
                    <li>
                      <Link>
                        <span>
                          <BsBoxSeam className="icon" />
                        </span>
                        <p>My Orders</p>
                      </Link>
                    </li>

                    <li>
                      <Link>
                        <span>
                          <TfiDashboard className="icon" />
                        </span>
                        <p> Dashboard</p>
                      </Link>
                    </li>

                    <li>
                      <Link>
                        <span>
                          <VscAccount className="icon" />
                        </span>
                        <p> My Account</p>
                      </Link>
                    </li>

                    <li>
                      <Link>
                        <span>
                          <SlEnvolopeLetter className="icon" />
                        </span>
                        <p> Messages</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="wishlist-contaier">
            <span>0</span>
            <div className="wishlist">
              <Link>
                <LiaHeart className="icon" />
                <p>Wishlist</p>
              </Link>
            </div>
          </div>

          <div onClick={cartDropShow} className="cart-container">
            <span>0</span>
            <div className="cart">
              <Link>
                <LiaShoppingCartSolid className="icon" />
                <p>Cart</p>
              </Link>
            </div>
          </div>

          <div className="menu-btn">
            <div onClick={showMenuDrop}>
              <AiOutlineMenu className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
