import Profile from "components/Profile";
import React from "react";
import "./styles.scss";

const DashBoard = () => {
  return (
    <>
      <div id="DashBoard" className="side-layout">
        <div className="tit">
          <span>DashBoard</span>
        </div>
        <div className="top-block">
          <div className="dashboard-box profile">
            <Profile />
          </div>
          <div className="dashboard-box schedule">스케줄</div>
          <div className="dashboard-box payroll">메뉴 레시피</div>
        </div>
        <div className="bottom-block">
          <div className="dashboard-box">공지사항</div>
          <div className="dashboard-box">메모사항</div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
