import React from "react";
import "./styles.css";
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import { BsFillPersonLinesFill, BsCalendarFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const StaffSide = () => {
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
            <NavLink to={"/staff/asdasd"} exact activeStyle={activeStyle}>
              <BsFillPersonLinesFill />
              <span>계정정보</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/asdasdasd"} exact activeStyle={activeStyle}>
              <BsCalendarFill />
              <span>스케줄러</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/asdasdasdasdasd"} exact activeStyle={activeStyle}>
              <AiFillClockCircle />
              <span>일한시간</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffSide;
