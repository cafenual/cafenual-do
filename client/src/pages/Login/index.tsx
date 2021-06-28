import axios from "axios";
import { reduxStoreState } from "modules";
import { SetUser } from "modules/users";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const history = useHistory();
  const user = useSelector((state: reduxStoreState) => state.user);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const { email, password } = form;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      email,
      password,
    };

    axios
      .post("/api/v1/user/login", body)
      .then((response) => {
        console.log(response);
        let userBody = response.data.user;
        dispatch(SetUser(userBody));
      })
      .catch(function (error) {
        // status 코드가 200이 아닌경우 처리
        if (error) {
          alert("로그인에 실패하였습니다.");
        }
      });
  };

  useEffect(() => {
    if (user.email) {
      console.log("유저가 있습니다.");
      history.push("/dashboard");
      try {
        sessionStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로컬 스토리지 저장에 실패했습니다");
      }
    } else {
      console.log("유저가 없습니다.");
    }
  }, [user, history]);

  return (
    <div id="Login">
      <div className="login-form">
        <div className="login-form-tit">Login</div>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            placeholder="사원 아이디"
            value={email}
            onChange={onChange}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChange}
            className="login-input"
          />
          <div className="login-manage">
            <div className="save-id">
              <input type="checkbox" className="checkbox" />
              <span>아이디 저장</span>
            </div>
            <div className="find-accounts">
              <a href="">아이디 찾기</a>
              <span>|</span>
              <a href="">비밀번호 찾기</a>
            </div>
          </div>
          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>
        <div className="join-link">
          <span>아직 회원이 아니신가요 ??</span>
          <span className="join-link-btn">
            <a href="/join">회원가입</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
