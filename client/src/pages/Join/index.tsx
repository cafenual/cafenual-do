import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import user, { SetUser } from "modules/users";
import { useEffect } from "react";
import { reduxStoreState } from "modules";
import { useHistory } from "react-router-dom";

const Join = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: reduxStoreState) => state.user);
  const [joinForm, setJoinForm] = useState({
    password: "",
    passwordCheck: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  const { password, passwordCheck, name, email, phoneNumber } = joinForm;

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
      phoneNumber,
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
      history.push("/dashboard");
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
      <div className="join-form">
        <div className="join-form-tit">Join</div>
        <form action="" onSubmit={onSubmit}>
          <label>이메일</label>
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            name="email"
            onChange={onChange}
          />

          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            name="password"
            onChange={onChange}
          />
          <label>비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={passwordCheck}
            name="passwordCheck"
            onChange={onChange}
          />
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            name="name"
            onChange={onChange}
          />
          <label>휴대폰 번호</label>
          <input
            type="number"
            placeholder="휴대폰 번호를 입력해주세요"
            value={phoneNumber}
            name="phoneNumber"
            onChange={onChange}
          />

          <button type="submit" className="join-btn">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
