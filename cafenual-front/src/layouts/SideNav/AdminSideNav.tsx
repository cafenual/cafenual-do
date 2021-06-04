import React from "react";
import "./styles.css";
import {
  AiFillHome,
} from "react-icons/ai";
import { BsFillPersonLinesFill, BsCalendarFill, BsFillPeopleFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const AdminSideNav = () => {
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
              <span>스케줄관리</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/staff/asdasdasdasdasd"}
              exact
              activeStyle={activeStyle}
            >
              <BsFillPeopleFill />
              <span>직원관리</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/money"} exact activeStyle={activeStyle}>
              <BiDollar />
              <span>급여관리</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideNav;
