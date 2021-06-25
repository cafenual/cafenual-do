import React from "react";
import "./styles.scss";

import {
  BiFoodMenu,
  BiBell,
  BiCalendarEdit,
  BiCoffeeTogo,
  BiMessageDots,
} from "react-icons/bi";
import { BsGrid, BsPieChartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const activeStyle = {
    backgroundColor: "rgb(236, 239, 241)",
    color: "#000",
  };

  const [headerMenuState, setHeaderMenuState] = useState(false);

  const HeaderMenuToggle = () => {
    setHeaderMenuState(!headerMenuState);
  };

  return (
    <div id="Header">
      <div
        className={
          headerMenuState === true ? "header-menu menu-active" : "header-menu"
        }
      >
        <div className="header-logo">
          <a href="/staff">
            <BsPieChartFill size="30" />
            <span className="h1">cafenual</span>
          </a>
          <button onClick={HeaderMenuToggle} className="mobile-btn">
            <AiOutlineMenu size="30" />
          </button>
        </div>

        <div className="header-nav">
          <div className="left-nav nav">
            <ul>
              <li className="list">
                <NavLink to={"/staff"} activeStyle={activeStyle}>
                  <BsGrid />
                  <span>대시보드</span>
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/menu/list"} exact activeStyle={activeStyle}>
                  <BiCoffeeTogo />
                  <span>메뉴레시피</span>
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/notice"} exact activeStyle={activeStyle}>
                  <BiBell />
                  <span>공지사항</span>
                </NavLink>
              </li>
              <li className="list">
                <NavLink to={"/memo"} activeStyle={activeStyle}>
                  <BiMessageDots />
                  <span>메모</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right-nav nav">
            <ul>
              <li className="list">
                <div className="logout">
                  <button>로그아웃</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={headerMenuState === true ? "header-bgc" : ""}></div>
    </div>
  );
};

export default Header;
