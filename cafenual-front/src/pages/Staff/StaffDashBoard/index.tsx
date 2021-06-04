import Profile from "components/StaffDashBoardProfile";
import AdminSideNav from "layouts/SideNav/AdminSideNav";
import StaffSideNav from "layouts/SideNav/StaffSideNav";
import React from "react";
import "./styles.css";

const StaffDashBoard = () => {
  return (
    <>
      {/* <AdminSideNav /> */}
      <StaffSideNav />
      <div id="StaffDashBoard" className="side-layout">
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
        <div className="bottom-block">
          <div className="commute-box">
            <button className="commute-btn">출근 하기</button>
            <button className="commute-btn">퇴근 하기</button>
          </div>

          <div className="notice-box">
            <div className="dashboard-box">공지사항</div>
          </div>
        </div>

        <div className="work-time">일한시간</div>
      </div>
    </>
  );
};

export default StaffDashBoard;
