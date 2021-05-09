import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

const Header = () => {
  const onClick = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div id="Header">
      <div className="header-menu">
        <div className="header-logo">
          <a href="/">
            <h1>cafenual</h1>
          </a>
        </div>

        <div className="header-nav">
          <ul>
            <li>
              <a href="/menu/upload">메뉴 업로드</a>
            </li>
            <li>
              <a href="/menu/list">메뉴보기</a>
            </li>
            <li>
              <a href="/notice">공지사항</a>
            </li>
            <li>
              <a href="/login">로그인</a>
            </li>
            <li>
              <a href="/join">회원가입</a>
            </li>
            <button onClick={onClick}>로그아웃</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
