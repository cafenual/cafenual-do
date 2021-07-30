import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import useInput from "hooks/common/useInput";
import useLogin from "hooks/user/useLogin";
import useLoginEffect from "hooks/user/useLoginEffect";

const LoginForm = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { onLogin } = useLogin();

  useLoginEffect();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onLogin(email, password);
  };

  return (
    <>
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
    
    </>
  );
};

export default LoginForm;
