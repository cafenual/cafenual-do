import axios from "axios";
import { reduxStoreState } from "modules";
import { SetUser } from "modules/users";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./styles.scss";

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
      history.push("/");
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
      <div className="accounts-form">
        <div className="accounts-ico">
          <BsLightningFill size="30" />
        </div>
        <div className="accounts-form-tit">로그인</div>
        <div className="accounts-des">
          카페 알바들을 위한 서비스를 이용해보세요!
        </div>
        <div className="accounts-social">
          <div className="google-btn">
            <button>
              <FcGoogle size="24" />
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="accounts-message">
          <div className="message-before"></div>
          <span className="message">or Sign in with Email</span>
          <div className="message-after"></div>
        </div>
        <form action="" onSubmit={onSubmit}>
          <label>이메일</label>
          <input
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={onChange}
            className="login-input"
          />
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={onChange}
            className="login-input"
          />

          <a href="" className="search-pw">비밀번호를 잊어버리셨나요?</a>

          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>
        <div className="accounts-link">
          <span className="link-des">아직 회원이 아니신가요??</span>
          <a href="">회원가입</a>
        </div>

        <div className="cafenual">©2021 cafenual</div>
      </div>
    </div>
  );
};

export default Login;
