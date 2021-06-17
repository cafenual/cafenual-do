import React from "react";
import { AiFillClockCircle, AiFillHome } from "react-icons/ai";
import { BsCalendarFill, BsFillPersonLinesFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Footer = () => {
  const activeStyle = {
    color: "#000",
  };
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
            <AiFillClockCircle size="22" />
            <span>일한시간</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
