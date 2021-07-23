import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.scss";

const NoticeSearchForm = () => {
  return (
    <div className="search-comm">
      <form action="">
        <fieldset>
          <input
            type="text"
            className="search-input"
            placeholder="검색어를 입력해주세요"
          />
          <button type="submit" className="search-btn">
            <AiOutlineSearch size="23" />
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default NoticeSearchForm;
