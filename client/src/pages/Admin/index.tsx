import React from "react";
import { Route } from "react-router-dom";
import StaffManagePage from "./StaffManagePage";
import "./styles.scss";

const AdminPage = () => {
  return (
    <>
      <div>
        <Route path="/admin/staffmanage" exact component={StaffManagePage} />
      </div>
    </>
  );
};

export default AdminPage;
