import { registerAPI } from "lib/api/user";
import { SetUser } from "modules/users";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function useRegister() {
  const dispatch = useDispatch();
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

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerAPI(email, password, name);
      dispatch(SetUser(response.user));
    } catch (e) {
      alert("회원가입에 실패했습니다.");
    }
  };

  return {
    onChange,
    onSubmit,
    email,
    name,
    password,
    passwordCheck,
  };
}
