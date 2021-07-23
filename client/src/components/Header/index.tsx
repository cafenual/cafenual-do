import React from "react";
import "./styles.scss";
import useLogout from "hooks/user/useLogout";
import useCheckLoggedIn from "hooks/user/useCheckLoggedIn";

const Header = () => {
  const { onLogout } = useLogout();
  const { user } = useCheckLoggedIn();

  return (
    <div id="Header">
      <div className="header-inner">
        <div></div>
        <div className="header-right">
          <span>{user.name}님 안녕하세요</span>
          <button onClick={onLogout}>로그아웃</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
