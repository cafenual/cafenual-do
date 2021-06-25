import Profile from "components/DashBoard/Profile";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import AdminSideNav from "layouts/SideNav/AdminSideNav";
import StaffSideNav from "layouts/SideNav/StaffSideNav";
import React from "react";
import "./styles.scss";

const StaffDashBoard = () => {
  return (
    <>
      <Header />
      <StaffSideNav />
      <div id="StaffDashBoard" className="side-layout">
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

export default StaffDashBoard;
