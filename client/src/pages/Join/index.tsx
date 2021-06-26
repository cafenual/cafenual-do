import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { RouteComponentProps } from "react-router";

interface PathParamsProps {
  history: RouteComponentProps["history"];
  location: RouteComponentProps["location"];
  match: RouteComponentProps["match"];
}

const Join = (props: PathParamsProps) => {
  const [joinForm, setJoinForm] = useState({
    userPw: "",
    userPwCheck: "",
    userName: "",
    userEmail: "",
  });

  const { userPw, userPwCheck, userName, userEmail } = joinForm;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJoinForm({
      ...joinForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let body = {
      email: userEmail,
      password: userPw,
      name: userName,
    };

    axios.post("/api/users/join", body).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        props.history.push("/login");
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해 주세요");
      }
    });
  };

  return (
    <div id="Join">
      <div className="join-form">
        <div className="join-form-tit">Join</div>
        <form action="" onSubmit={onSubmit}>
          <label>이메일</label>
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={userEmail}
            name="userEmail"
            onChange={onChange}
          />

          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={userPw}
            name="userPw"
            onChange={onChange}
          />
          <label>비밀번호 확인</label>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={userPwCheck}
            name="userPwCheck"
            onChange={onChange}
          />
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={userName}
            name="userName"
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
