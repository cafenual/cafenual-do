import React from "react";
import "./styles.scss";

import { BsPieChartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { SetUser, userState } from "modules/users";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reduxStoreState } from "modules";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: reduxStoreState) => state.user);

  const [headerMenuState, setHeaderMenuState] = useState(false);

  const logoutHandler = () => {
    let UserBody: userState = {
      _id: "",
      email: "",
      name: "",
      role: "",
      status: "",
      token: "",
      wage: 0,
    };

    axios
      .post("/api/v1/user/logout")
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          sessionStorage.removeItem("user"); // sessionStorage에서 user를 제거
          dispatch(SetUser(UserBody));
        }
      })
      .catch(function (error) {
        // status 코드가 200이 아닌경우
        if (error) {
          alert("로그아웃에 실패했습니다.");
        }
      });
  };

  useEffect(() => {
    if (user.email) {
      console.log("로그인 한 상태 입니다.");
    } else {
      console.log("로그 아웃 상태입니다.");
      history.push("/login");
    }
  }, [user, history]);

  return (
    <div id="Header">
      <div className="header-inner">
        <div></div>
        <div className="header-calender">
          <span>calender</span>
        </div>
        <button onClick={logoutHandler}>로그아웃</button>
      </div>
    </div>
  );
};

export default Header;
