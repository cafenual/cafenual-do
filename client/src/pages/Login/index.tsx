import { reduxStoreState } from "modules";
import { SetUser } from "modules/users";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./styles.scss";
import { login } from "lib/api/user";

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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      dispatch(SetUser(user));
    } catch (e) {
      alert("로그인에 실패했습니다.");
    }
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

          <Link to="/" className="search-pw">
            비밀번호를 잊어버리셨나요?
          </Link>

          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>
        <div className="accounts-link">
          <span className="link-des">아직 회원이 아니신가요??</span>
          <Link to="/join">회원가입</Link>
        </div>

        <div className="cafenual">©2021 cafenual</div>
      </div>
    </div>
  );
};

export default Login;
