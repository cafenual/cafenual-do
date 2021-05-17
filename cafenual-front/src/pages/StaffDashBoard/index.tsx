import Profile from "components/Profile";
import React from "react";
import "./styles.css";

const StaffDashBoard = () => {
  return (
    <div id="StaffDashBoard">
      <div className="top-block">
        <div className="left-box">
          <div className="tit">
            <span>DashBoard</span>
          </div>
          <div className="dashboard-box">
            <Profile />
          </div>
        </div>
        <div className="right-box">
          <div className="tit">
            <span>2021-05-17</span>
          </div>
          <div className="schedule">
            <div className="dashboard-box">전체스케줄</div>
            <div className="dashboard-box">개인스케줄</div>
          </div>
        </div>
      </div>
      <div className="bottom-block"></div>
    </div>
  );
};

export default StaffDashBoard;
