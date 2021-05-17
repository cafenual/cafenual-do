import React from "react";
import "./styles.css";
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import { BsFillPersonLinesFill, BsCalendarFill } from "react-icons/bs";

const StaffSide = () => {
  return (
    <div id="StaffSide">


      <div className="navigation nav">
        <div className="nav-title">
          <span>NAVIGATION</span>
        </div>
        <ul>
          <li className="active">
            <a href="" >
              <AiFillHome />
              <span>Home</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="apps nav">
        <div className="nav-title">
          <span>Apps</span>
        </div>
        <ul>
          <li>
            <a href="" className="">
              <BsFillPersonLinesFill />
              <span >계정정보</span>
            </a>
          </li>
          <li>
            <a href="">
              <BsCalendarFill />
              <span>스케줄러</span>
            </a>
          </li>
          <li>
            <a href="">
              <AiFillClockCircle />
              <span>일한시간</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffSide;
