import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import useLoginEffect from "hooks/user/useLoginEffect";
import useRegister from "hooks/user/useRegister";

const RegisterForm = () => {
  const { onChange, onSubmit, email, name, password, passwordCheck } =
    useRegister();

  useLoginEffect();

  return (
    <div id="RegisterForm">
      <div className="accounts-form">
        <div className="accounts-ico">
          <BsLightningFill size="30" />
        </div>
        <div className="accounts-form-tit">회원가입</div>
        <div className="accounts-des">
          카페 알바들을 위한 서비스를 이용해보세요!
        </div>

        <div className="accounts-social">
          <div className="google-btn">
            <button>
              <FcGoogle size="24" />
              Sign up with Google
            </button>
          </div>
        </div>

        <div className="accounts-message">
          <div className="message-before"></div>
          <span className="message">or Sign up with Email</span>
          <div className="message-after"></div>
        </div>

        <form action="" onSubmit={onSubmit}>
          <label>
            이메일
            <span>*</span>
          </label>
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            name="email"
            onChange={onChange}
          />

          <label>
            비밀번호<span>*</span>
          </label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            name="password"
            onChange={onChange}
          />
          <label>
            비밀번호 확인<span>*</span>
          </label>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={passwordCheck}
            name="passwordCheck"
            onChange={onChange}
          />
          <label>
            이름<span>*</span>
          </label>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            name="name"
            onChange={onChange}
          />

          <button type="submit" className="accounts-btn">
            회원가입
          </button>
        </form>

        <div className="accounts-link">
          <span className="link-des">이미 회원이신가요??</span>
          <Link to="/login">로그인</Link>
        </div>

        <div className="cafenual">©2021 cafenual</div>
      </div>
    </div>
  );
};

export default RegisterForm;
