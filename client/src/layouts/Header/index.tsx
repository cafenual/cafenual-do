import React from "react";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { SetUser, userState } from "modules/users";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reduxStoreState } from "modules";
import { logout } from "lib/api/user";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: reduxStoreState) => state.user);

  const onLogout = async () => {
    let UserBody: userState = {
      _id: "",
      email: "",
      name: "",
      role: "",
      status: "",
      token: "",
      wage: 0,
    };
    try {
      await logout();
      sessionStorage.removeItem("user");
      dispatch(SetUser(UserBody));
    } catch (e) {
      alert("로그아웃에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (!user.email) {
      history.push("/login");
    }
  }, [user, history]);

  return (
    <div id="Header">
      <div className="header-inner">
        <div></div>
        <div className="header-calender">
          <span>2021-06-29</span>
        </div>
        <button onClick={onLogout}>로그아웃</button>
      </div>
    </div>
  );
};

export default Header;
