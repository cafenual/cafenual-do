import React from "react";
import "./styles.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div id="Header">
      <div className="header-nav">
        <div className="header-logo">
          <h1>cafenual</h1>
        </div>
        <div className="header-search">
          <div className="search-input">
            <input type="text" />
          </div>

          <div className="search-click">
            <AiOutlineSearch size="24" />
          </div>
        </div>

        <div className="header-menu">
          <AiOutlineMenu size="24" />
        </div>
      </div>
    </div>
  );
};

export default Header;
