import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";

const StaffSearchBar = () => {
  return (
    <div id="StaffSearchBar">
      <div className="inner-searchbar">
        <ul className="search-list">
          <div className="title">직원 검색</div>
          <div className="spa"></div>

          <li>
            <select name="" id="">
              <option value="">직책 검색</option>
              <option value="">관리자</option>
              <option value="">스태프</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="">재직 유무</option>
              <option value="">재직자</option>
              <option value="">퇴직자</option>
            </select>
          </li>
          <li>
            <input
              type="text"
              className="search-direct"
              placeholder="직접 입력"
            />
          </li>
          <li>
            <button>
              <AiOutlineSearch size="25" />
            </button>
          </li>
        </ul>
        <button className="search-all">전체보기</button>
        <div className="staff-num">총 2명</div>
      </div>
    </div>
  );
};

export default StaffSearchBar;
