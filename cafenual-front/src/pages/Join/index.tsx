import React, { useEffect, useState } from "react";
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

  const [test, setTest] = useState("아이디"); // 시험용으로 만들어봄 DB에서 값을 쓸때 어떻게 쓰는지 궁금해서

  const onSubmit = (e: any) => {
    e.preventDefault();

    let body = {
      email: userId,
      password: userPw,
      name: userName,
    };

    axios.post("/api/users/join", body).then((response) => {
      let a = JSON.parse(response.config.data);
      console.log(a);
      setTest(a.email);
    });
  };

  useEffect(() => {  // 몽고디비에서 데이터 부르는거 테스트용 성공!
    let test1 = {
      role: 0,
    };

    axios.post("/api/test/test1", test1).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div id="Join">
      <div className="join-form">
        <div className="join-form-tit">Join</div>
        <form action="" onSubmit={onSubmit}>
          <label>{test}</label>
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
