import React from "react";
import { Route } from "react-router";
import SchedulerPage from "./SchedulerPage";

const Scheduler = () => {
  return (
    <div>
      <Route path="/scheduler" exact component={SchedulerPage} />
    </div>
  );
};

export default Scheduler;
