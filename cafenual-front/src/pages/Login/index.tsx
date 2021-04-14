import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const [form, setForm] = useState({
    userNum: "",
    password: "",
  });

  const onChange = (e: any) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const { userNum, password } = form;

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div id="Login">
      <div className="login-form">
        <div className="login-form-tit">
          Login
        </div>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            name="userNum"
            placeholder="아이디"
            value={userNum}
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
          <button type="submit" className="login-btn">로그인</button>
        </form>
        <div className="join-link">
          <span>아직 회원이 아니신가요 ??</span>
          <span className="join-link-btn"><a href="">회원가입</a></span>
        </div>

      </div>
    </div>
  );
};

export default Login;
