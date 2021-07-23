import React from "react";
import "./styles.scss";
import useLoginEffect from "hooks/user/useLoginEffect";
import useRegister from "hooks/user/useRegister";

const RegisterForm = () => {
  const { onChange, onSubmit, email, name, password, passwordCheck } =
    useRegister();
  useLoginEffect();

  return (
    <>
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
    </>
  );
};

export default RegisterForm;
