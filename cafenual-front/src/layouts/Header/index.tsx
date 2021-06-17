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

const Header = () => {
  const activeStyle = {
    backgroundColor: "rgb(236, 239, 241)",
    color: "#000",
  };

  return (
    <div id="Header">
      <div className="header-menu">
        <div className="header-logo">
          <a href="/staff">
            <BsPieChartFill size="30" />
            <span className="h1">cafenual</span>
          </a>
          <div className="mobile-btn">
            <AiOutlineMenu size="30" />
          </div>
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
                <NavLink to={"/message"} activeStyle={activeStyle}>
                  <BiMessageDots />
                  <span>쪽지함</span>
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
    </div>
  );
};

export default Header;
