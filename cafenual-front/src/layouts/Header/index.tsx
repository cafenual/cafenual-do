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
      return setTimeout(() => setSlide(!slide), 100);
    }
    slideMenu();
  };

  return (
    <div id="Header">
      <div className="header-menu">
        <div className="header-logo">
          <a href="/">
            <h1>cafenual</h1>
          </a>
        </div>

        <div className="header-nav">
          <ul>
            <li>
              <a href="/login">로그인</a>
            </li>
            <li>
              <a href="/join">회원가입</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
