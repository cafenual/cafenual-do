import React from "react";
import { Route } from "react-router-dom";
import StaffManagePage from "./StaffManagePage";
import "./styles.scss";
import WorkManagePage from "./WorkManagePage";

const AdminPage = () => {
  return (
    <>
      <Route path="/admin/staffmanage" exact component={StaffManagePage} />
      <Route path="/admin/workmanage" exact component={WorkManagePage} />
    </>
  );
};

export default AdminPage;
