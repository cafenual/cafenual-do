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
        <h1>
          cafenual
        </h1>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            name="userNum"
            placeholder="사원번호"
            value={userNum}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChange}
          />
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
