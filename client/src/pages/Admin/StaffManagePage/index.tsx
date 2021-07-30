import StaffList from "components/StaffList";
import StaffSearchBar from "components/StaffSearchBar";
import React from "react";
import "./styles.scss";

const StaffManagePage = () => {
  return (
    <>
      <div id="StaffManagePage" className="side-layout">
        <div className="admin-tit">
          <h1>관리자 {">"} 직원 관리</h1>
        </div>

        <div className="cont">
          <StaffSearchBar />
          <StaffList />
        </div>
      </div>
    </>
  );
};

export default StaffManagePage;
