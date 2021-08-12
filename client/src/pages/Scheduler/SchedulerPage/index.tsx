import Calender from "components/Calendar";
import React from "react";
import "./styles.scss";

const SchedulerPage = () => {
  return (
    <div id="SchedulerPage" className="side-layout">
      <div className="schedule-nav">
        <a href="" className="btn-type1">
          스케줄 관리
        </a>
      </div>
      <Calender />
    </div>
  );
};

export default SchedulerPage;
