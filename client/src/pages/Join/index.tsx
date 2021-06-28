import React, { useState } from "react";
import axios from "axios";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import user, { SetUser } from "modules/users";
import { useEffect } from "react";
import { reduxStoreState } from "modules";
import { useHistory } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Join = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: reduxStoreState) => state.user);
  const [joinForm, setJoinForm] = useState({
    password: "",
    passwordCheck: "",
    name: "",
    email: "",
  });

  const { password, passwordCheck, name, email } = joinForm;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setJoinForm({
      ...joinForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      email,
      password,
      name,
    };

    axios.post("/api/v1/user/register", body).then((response) => {
      console.log(response.data);
      let userBody = response.data.user;
      dispatch(SetUser(userBody));
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
      console.log("유저가 업습니다.");
    }
  }, [user, history]);

  return (
    <div id="Join">
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
          <a href="">로그인</a>
        </div>

        <div className="cafenual">©2021 cafenual</div>
      </div>
    </div>
  );
};

export default Join;
