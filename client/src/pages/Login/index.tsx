import axios from "axios";
import { loginUser } from "modules/users";
import React, { useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import "./styles.css";

interface PathParamsProps {
  history: RouteComponentProps["history"];
  location: RouteComponentProps["location"];
  match: RouteComponentProps["match"];
  dispatchUser: any;
}

const Login = (props: PathParamsProps) => {
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

    axios.post("/api/v1/user/login", body).then((response) => {
      console.log(response.data);
      // if (response.data.loginSuccess) {
      //   props.dispatchUser(response.data.userId);
      //   props.history.push("/");
      //   window.localStorage.setItem("userId", response.data.userId);
      // } else {
      //   alert("로그인에 실패 했습니다. 다시 시도 해주세요!");
      // }
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

function mapStateToProps(state: any) {
  console.log(state);
  // redux state로 부터 state를 component의 props으로 전달해줌
  // store의 값을 여기 state로 가져올 수 있음
  return { users: state.user };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  console.log(ownProps);
  return {
    dispatchUser: (userId: any) => dispatch(loginUser(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
