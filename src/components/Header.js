import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <>
      <nav className="header">
        <Link to="/home">
          <div className="header_left">
            <img
              className="header_logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Error"
            />
          </div>
        </Link>
        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <Link to="/login" className="header_link">
            <div className="header_option">
              <span className="header_option_lineOne">Hello User</span>
              <span className="header_option_linetwo">Sign In</span>
            </div>
          </Link>
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_option_lineOne">Return</span>
              <span className="header_option_linetwo"> & Order</span>
            </div>
          </Link>
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_option_lineOne">Your</span>
              <span className="header_option_linetwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionlinetwo header_basketCount">0</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
