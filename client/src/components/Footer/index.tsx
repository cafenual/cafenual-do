import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsCalendarFill, BsFillPersonLinesFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Footer = () => {
  const activeStyle = {
    color: "#000",
  };
  if (window.location.pathname === "/login") return null;
  if (window.location.pathname === "/join") return null;
  return (
    <div id="Footer">
      <ul>
        <li>
          <NavLink to={"/staff"} exact activeStyle={activeStyle}>
            <AiFillHome size="22" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/staff/accountinfo"} exact activeStyle={activeStyle}>
            <BsFillPersonLinesFill size="22" />
            <span>계정정보</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/staff/scheduler"} exact activeStyle={activeStyle}>
            <BsCalendarFill size="22" />
            <span>스케줄러</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/staff/workingtime"} exact activeStyle={activeStyle}>
            <BiDollar size="22" />
            <span>급여내역</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
