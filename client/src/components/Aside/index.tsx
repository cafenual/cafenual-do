import React from "react";
import "./styles.scss";
import { BiBell, BiCoffeeTogo, BiMessageDots } from "react-icons/bi";
import { BsGrid, BsInfoCircleFill } from "react-icons/bs";
import {
  BsFillPersonLinesFill,
  BsCalendarFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ImPieChart } from "react-icons/im";
import { useSelector } from "react-redux";
import { reduxStoreState } from "modules";
import { MdWork } from "react-icons/md";

const Aside = () => {
  const user = useSelector((state: reduxStoreState) => state.user);

  const activeStyle = {
    backgroundColor: "rgb(243 243 250)",
    color: "rgb(91 78 246)",
    FontWeight: "700",
  };

  return (
    <div id="Aside">
      <div className="inner-side nav">
        <div className="side-tit">
          <ImPieChart size="30" />
          <span>cafenual</span>
        </div>

        <div className="apps-list">
          <div className="nav-title">
            <span>Apps</span>
          </div>
          <ul>
            <li>
              <NavLink to={"/"} exact activeStyle={activeStyle}>
                <BsGrid />
                <span>대시보드</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/recipe"} activeStyle={activeStyle}>
                <BiCoffeeTogo />
                <span>메뉴레시피</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/notice"} activeStyle={activeStyle}>
                <BiBell />
                <span>공지사항</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/transition"} exact activeStyle={activeStyle}>
                <BiMessageDots />
                <span>전달사항</span>
              </NavLink>
            </li>
          </ul>

          {user.role === "staff" && (
            <>
              <div className="nav-title">
                <span>Staff</span>
              </div>
              <ul>
                <li>
                  <NavLink
                    to={"/staff/scheduler"}
                    exact
                    activeStyle={activeStyle}
                  >
                    <BsCalendarFill />
                    <span>스케줄러</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/staff/payroll"}
                    exact
                    activeStyle={activeStyle}
                  >
                    <BiDollar />
                    <span>급여내역</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/accountinfo"} exact activeStyle={activeStyle}>
                    <BsFillPersonLinesFill />
                    <span>계정정보</span>
                  </NavLink>
                </li>
              </ul>
            </>
          )}

          {user.role === "admin" && (
            <>
              <div className="nav-title">
                <span>Admin</span>
              </div>
              <ul>
                <li>
                  <NavLink
                    to={"/admin/schedulemanage"}
                    exact
                    activeStyle={activeStyle}
                  >
                    <BsCalendarFill />
                    <span>스케줄관리</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/admin/staffmanage"}
                    exact
                    activeStyle={activeStyle}
                  >
                    <BsFillPeopleFill />
                    <span>직원관리</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/admin/workmanage"}
                    exact
                    activeStyle={activeStyle}
                  >
                    <MdWork />
                    <span>업무관리</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/admin/payrollmanage"}
                    exact
                    activeStyle={activeStyle}
                  >
                    <BiDollar />
                    <span>급여관리</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/accountinfo"} exact activeStyle={activeStyle}>
                    <BsFillPersonLinesFill />
                    <span>계정정보</span>
                  </NavLink>
                </li>
              </ul>
            </>
          )}
        </div>

        <div className="develop-info">
          <BsInfoCircleFill />
          <a
            href="https://github.com/ksmfou98"
            target="_blank"
            rel="noreferrer"
          >
            개발자 소개
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
