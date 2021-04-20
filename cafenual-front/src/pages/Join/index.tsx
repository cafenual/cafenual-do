import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Join = (props: any) => {
  const [joinForm, setJoinForm] = useState({
    userId: "",
    userPw: "",
    userPwCheck: "",
    userName: "",
    userEmail: "",
  });

  const { userId, userPw, userPwCheck, userName, userEmail } = joinForm;

  const onChange = (e: any) => {
    setJoinForm({
      ...joinForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    let body = {
      id: userId,
      pw: userPw,

    }

    axios.post("/api/users/join", body).then((response) => {
      console.log(response);
    });
  };

 

  return (
    <div id="Join">
      <div className="join-form">
        <div className="join-form-tit">Join</div>
        <form action="" onSubmit={onSubmit}>
          <label>아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={userId}
            name="userId"
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
          <label>이메일</label>
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={userEmail}
            name="userEmail"
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
