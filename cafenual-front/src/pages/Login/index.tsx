import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

const Login = (props: any) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: any) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const { email, password } = form;

  const onSubmit = (e: any) => {
    e.preventDefault();

    let body = {
      email,
      password,
    };

    axios.post("/api/users/login", body).then((response) => {
      console.log(response.data);
      if (response.data.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인에 실패 했습니다. 다시 시도 해주세요!");
      }
    });
  };

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
