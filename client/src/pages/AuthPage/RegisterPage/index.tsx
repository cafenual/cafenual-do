import React from "react";
import RegisterForm from "components/RegisterForm";
import { BsLightningFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./styles.scss";

const RegisterPage = () => {
  return (
    <div id="RegisterPage" className="authForm">
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
        <RegisterForm />
        <div className="accounts-link">
          <span className="link-des">이미 회원이신가요??</span>
          <Link to="/login">로그인</Link>
        </div>

        <div className="cafenual">©2021 cafenual</div>
      </div>
    </div>
  );
};

export default RegisterPage;
