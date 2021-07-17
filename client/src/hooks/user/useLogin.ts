import { login } from "lib/api/user";
import { SetUser } from "modules/users";
import { useDispatch } from "react-redux";

export default function useLogin() {
  const dispatch = useDispatch();
  const onLogin = async (email: string, password: string) => {
    try {
      const user = await login(email, password);
      dispatch(SetUser(user));
    } catch (e) {
      alert("로그인에 실패했습니다.");
    }
  };

  return {
    onLogin,
  };
}
