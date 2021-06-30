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
        <div className="inner-manage">
          <div className="manage-tit">
            <span>Category</span>
            <a href="">카테고리 등록</a>
          </div>
          <div className="category-list-table">
            <div className="search-box">
              <div className="search">
                <input type="text" placeholder="카테고리를 검색" />
              </div>
            </div>

            <div className="category-list">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>번호</th>
                    <th style={{ width: "45%" }}>이름</th>
                    <th style={{ width: "25%" }}>레시피 수</th>
                    <th style={{ width: "10%" }}>수정</th>
                    <th style={{ width: "10%" }}>삭제</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryManage;
