import { reduxStoreState } from "modules";
import { SetUser } from "modules/users";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./styles.scss";
import { login } from "lib/api/user";
import useInput from "hooks/common/useInput";

const Login = () => {
  const history = useHistory();
  const user = useSelector((state: reduxStoreState) => state.user);
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

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
      history.push("/");
      try {
        sessionStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로컬 스토리지 저장에 실패했습니다");
      }
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
            onChange={onChangeEmail}
            className="login-input"
          />
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={onChangePassword}
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
