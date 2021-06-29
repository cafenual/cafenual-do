import ManageNav from "components/Recipe/ManageNav";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React from "react";
import "./styles.scss";

const CategoryManage = () => {
  return (
    <>
      <Header />
      <Aside />
      <ManageNav />
      <div id="CategoryManage" className="side-layout">
        <div className="manage-tit">Category</div>
        <div className="category-list-table">
          <div className="search-box">
            <div className="search">
              <input type="text" placeholder="카테고리를 검색" />
            </div>
          </div>

          <div className="category-list">
            <ul>
              <li>Coffee</li>
              <li>Latte</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryManage;
