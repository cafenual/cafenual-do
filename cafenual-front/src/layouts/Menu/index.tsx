import React from "react";
import "./styles.css";
import {
  AiOutlineClose,
  AiOutlineStar,
  AiOutlineUser,
  AiOutlineDown,
} from "react-icons/ai";

interface MenuTabProps {
  menu: boolean;
  onToggle: any;
  slide: boolean;
}

const Menu: React.FunctionComponent<MenuTabProps> = ({
  menu,
  onToggle,
  slide,
}) => {
  return (
    <div className="menu">
      <div className="menu-active"></div>

      <div className={slide === false ? "menu-side" : `menu-side on`}>
        <div className="side-tit">
          <h1>
            <span className="tit-logo">
              <AiOutlineStar size="25" />
              마이메뉴
            </span>
          </h1>
          <div className="side-close" onClick={onToggle}>
            <AiOutlineClose size="20" />
          </div>
        </div>

        <div className="side-tab">
          <div className="user-info">
            <h3>
              <span>
                <AiOutlineUser />
                개인정보
              </span>
              <span>
                <AiOutlineDown />
              </span>
            </h3>

            <ul className="user-menu">
              <li>
                <a href="">- 개인정보수정</a>
              </li>
              <li>
                <a href="/commute">- 출근·퇴근</a>
              </li>
              <li>
                <a href="/messenger">- 쪽지함</a>
              </li>
              <li>
                <a href="/login">- 로그인</a>
              </li>
              <li>
                <a href="/menu">- 메뉴 등록</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
