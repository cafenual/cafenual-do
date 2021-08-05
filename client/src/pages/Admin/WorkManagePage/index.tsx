import WorkList from "components/WorkList";
import React from "react";
import "./styles.scss";

const WorkManagePage = () => {
  return (
    <>
      <div id="WorkManagePage" className="side-layout">
        <div className="admin-tit">
          <h1>관리자 {">"} 업무 관리</h1>
        </div>

        <WorkList />
      </div>
    </>
  );
};

export default WorkManagePage;
