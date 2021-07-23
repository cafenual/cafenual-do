import React from "react";
import "./styles.scss";
import useLogout from "hooks/user/useLogout";
import useCheckLoggedIn from "hooks/user/useCheckLoggedIn";

const Header = () => {
  const { onLogout } = useLogout();

  useCheckLoggedIn();

  return (
    <div id="Header">
      <div className="header-inner">
        <div></div>
        <button onClick={onLogout}>로그아웃</button>
      </div>
    </div>
  );
};

export default Header;
