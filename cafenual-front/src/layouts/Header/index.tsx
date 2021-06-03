import React from "react";
import "./styles.css";

import {
  BiFoodMenu,
  BiBell,
  BiCalendarEdit,
  BiCoffeeTogo,
} from "react-icons/bi";
import { BsGrid, BsPieChartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import RightNav from "./RightNav";

const Header = () => {
  const activeStyle = {
    backgroundColor: "rgb(234 240 244)",
    color: "rgb(18, 113, 175)",
  };

  return (
    <div id="Header">
      <div className="header-menu">
        <div className="header-logo">
          <a href="/staff">
            <BsPieChartFill size="30" />
            <span className="h1">cafenual</span>
          </a>
        </div>

        <div className="header-nav">
          <div className="left-nav nav">
            <ul>
              <li>
                <NavLink to={"/staff"} activeStyle={activeStyle}>
                  <BsGrid />
                  <span>대시보드</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/menu/list"} exact activeStyle={activeStyle}>
                  <BiCoffeeTogo />
                  <span>메뉴레시피</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/notice"} exact activeStyle={activeStyle}>
                  <BiBell />
                  <span>공지사항</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/transition"} exact activeStyle={activeStyle}>
                  <BiCalendarEdit />
                  <span>인수인계</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/workmanual/"} activeStyle={activeStyle}>
                  <BiFoodMenu />
                  <span>업무매뉴얼</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
