import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
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
            <span>Hello User</span>
            <span>Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span>Return</span>
            <span>& Order</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
