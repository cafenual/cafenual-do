import React from "react";
import LoginForm from "components/LoginForm";
import { BsLightningFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div id="LoginPage" className="authForm">
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
        <LoginForm />
        <div className="accounts-link">
          <span className="link-des">아직 회원이 아니신가요??</span>
          <Link to="/register">회원가입</Link>
        </div>
        <div className="cafenual">©2021 cafenual</div>
      </div>
    </div>
  );
};

export default LoginPage;
