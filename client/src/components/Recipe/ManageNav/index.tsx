import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const ManageNav = () => {
  return (
    <>
      <div id="ManageNav">
        <div className="nav-tit">Setting</div>
        <div className="nav-tit-des">레시피 관리</div>
        <ul>
          <li>
            <NavLink to={""}>
              <div>
                <span>카테고리 관리</span>
              </div>
              <span>카테고리를 등록하고 관리(수정, 삭제)할 수 있습니다</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={""}>
              <div>
                <span>레시피 관리</span>
              </div>
              <span>레시피를 등록하고 관리(수정, 삭제)할 수 있습니다</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ManageNav;
