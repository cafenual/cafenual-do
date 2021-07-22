import { logout } from "lib/api/user";
import { UserStateEmpty } from "modules/users";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useLogout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = async () => {
    try {
      await logout();
      sessionStorage.removeItem("user");
      dispatch(UserStateEmpty());
      history.push("/login");
    } catch (e) {
      alert("로그아웃에 실패했습니다.");
    }
  };

  return {
    onLogout,
  };
}
