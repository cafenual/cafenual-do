import React, { useState } from "react";
import "./styles.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import Menu from "layouts/Menu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [slide, setSlide] = useState(false);

  const onToggle = () => {
    setMenu(!menu);
    function slideMenu() {
      return setTimeout(() => setSlide(!slide), 100)
    }
    slideMenu();
  };

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
          <div className="menu-ico" onClick={() => onToggle()}>
            <AiOutlineMenu size="24" />
          </div>
          <div className={menu === false ? "" : "menu-on"}>
            {" "}
            {/* menu-on */}
            <Menu menu={menu} onToggle={onToggle} slide={slide}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
