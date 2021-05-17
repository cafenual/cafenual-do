import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { BiFoodMenu, BiBell, BiCalendarEdit } from "react-icons/bi";
import { BsGrid, BsPieChartFill } from "react-icons/bs";

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
            <BsPieChartFill size="30" />
            <span className="h1">cafenual</span>
          </a>
        </div>

        <div className="header-nav">
          <div className="left-nav nav">
            <ul>
              <li className="active">
                <a>
                  <BsGrid />
                  <span>대시보드</span>
                </a>
              </li>
              <li>
                <a>
                  <BiFoodMenu />
                  <span>메뉴레시피</span>
                </a>
              </li>
              <li>
                <a>
                  <BiBell />
                  <span>공지사항</span>
                </a>
              </li>
              <li>
                <a>
                  <BiCalendarEdit />
                  <span>인수인계</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <ul>
              <li>
                <a>로그인</a>
              </li>
              <li>
                <a>회원가입</a>
              </li>
              <li>
                <a>로그아웃</a>
              </li>
            </ul>
          </div>
          {/* <ul>
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
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
