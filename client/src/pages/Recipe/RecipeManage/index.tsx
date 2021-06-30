import ManageNav from "components/Recipe/ManageNav";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React from "react";
import "./styles.scss";

const RecipeManage = () => {
  return (
    <>
      <Header />
      <Aside />
      <ManageNav />
      <div id="RecipeManage" className="side-layout manage-layout"></div>
    </>
  );
};

export default RecipeManage;
