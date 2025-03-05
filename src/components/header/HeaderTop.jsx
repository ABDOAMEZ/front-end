import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <p>
          Special collection
          <span>already available</span>
        </p>
        <Link>Read More...</Link>
      </div>

      <div className="header-top-right">
        <div className="Link">
          <p>
            Links{" "}
            <span>
              <IoIosArrowDown className="icon" />
            </span>
          </p>

          <div className="links">
            {window.location.pathname !== "/store" ? (
              <Link>About Us</Link>
            ) : (
              <Link>Store</Link>
            )}
            <div className="language-switch">
              <select>
                <option>EN</option>
                <option>FR</option>
                <option value="">AR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
