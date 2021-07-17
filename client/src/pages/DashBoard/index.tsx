import Profile from "components/DashBoard/Profile";
import Footer from "components/Footer";
import Header from "components/Header";
import StaffSideNav from "components/Aside";
import React from "react";
import "./styles.scss";

const DashBoard = () => {
  return (
    <>
      <Header />
      <StaffSideNav />
      <div id="DashBoard" className="side-layout">
        <div className="tit">
          <span>DashBoard</span>
        </div>
        <div className="top-block">
          <div className="dashboard-box profile">
            <Profile />
          </div>
          <div className="dashboard-box schedule">스케줄</div>
          <div className="dashboard-box payroll">급여내역</div>
        </div>
        <div className="bottom-block">
          <div className="dashboard-box">공지사항</div>
          <div className="dashboard-box">메모사항</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashBoard;
