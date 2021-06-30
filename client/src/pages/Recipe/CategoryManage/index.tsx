import ManageNav from "components/Recipe/ManageNav";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React from "react";
import "./styles.scss";
import { MdEdit } from "react-icons/md";
import { HiMinusCircle } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const CategoryManage = () => {
  return (
    <>
      <Header />
      <Aside />
      <ManageNav />

      <div id="CategoryManage" className="side-layout manage-layout">
        <div className="inner-manage">
          <div className="manage-tit">
            <span>Category</span>
            <input type="text" placeholder="카테고리 입력" />
            <button>카테고리 등록</button>
          </div>
          <div className="category-list-table">
            <div className="search-box">
              <div className="search">
                <input type="text" placeholder="카테고리 검색" />
                <button>
                  <AiOutlineSearch size="30" />
                </button>
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
                <tbody>
                  <tr>
                    <td>1</td>
                    <td className="name">coffee</td>
                    <td>2</td>
                    <td className="ico">
                      <MdEdit size="26" />
                    </td>
                    <td className="ico">
                      <HiMinusCircle size="26" />
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td className="name">coffee</td>
                    <td>2</td>
                    <td className="ico">
                      <MdEdit size="26" />
                    </td>
                    <td className="ico">
                      <HiMinusCircle size="26" />
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td className="name">coffee</td>
                    <td>2</td>
                    <td className="ico">
                      <MdEdit size="26" />
                    </td>
                    <td className="ico">
                      <HiMinusCircle size="26" />
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td className="name">coffee</td>
                    <td>2</td>
                    <td className="ico">
                      <MdEdit size="26" />
                    </td>
                    <td className="ico">
                      <HiMinusCircle size="26" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryManage;
