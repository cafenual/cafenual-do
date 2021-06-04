import React from "react";
import "./styles.css";
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
    backgroundColor: "rgb(234 240 244)",
    color: "rgb(18, 113, 175)",
  };

  return (
    <div id="StaffSide">
      <div className="navigation nav">
        <div className="nav-title">
          <span>NAVIGATION</span>
        </div>
        <ul>
          <li>
            <NavLink to={"/staff"} exact activeStyle={activeStyle}>
              <AiFillHome />
              <span>Home</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="apps nav">
        <div className="nav-title">
          <span>Apps</span>
        </div>
        <ul>
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
          <li>
            <NavLink to={"/staff/payroll"} exact activeStyle={activeStyle}>
              <BiDollar />
              <span>급여내역</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffSideNav;
