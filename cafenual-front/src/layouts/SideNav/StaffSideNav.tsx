import React from "react";
import "./styles.scss";
import {
  AiFillHome,
  AiFillClockCircle,
  AiFillDollarCircle,
} from "react-icons/ai";
import { BsFillPersonLinesFill, BsCalendarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const StaffSideNav = () => {
  const activeStyle = {
    backgroundColor: "rgb(236, 239, 241)",
    color: "#000",
  };

  return (
    <div id="StaffSide">
      <div className="apps nav">
        <div className="nav-title">
          <span>Apps</span>
        </div>
        <ul>
          <li>
            <NavLink to={"/staff"} exact activeStyle={activeStyle}>
              <AiFillHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/accountinfo"} exact activeStyle={activeStyle}>
              <BsFillPersonLinesFill />
              <span>계정정보</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/scheduler"} exact activeStyle={activeStyle}>
              <BsCalendarFill />
              <span>스케줄러</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/workingtime"} exact activeStyle={activeStyle}>
              <AiFillClockCircle />
              <span>일한시간</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffSideNav;
