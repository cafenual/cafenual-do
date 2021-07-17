import { reduxStoreState } from "modules";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useCheckUserEffect() {
  const history = useHistory();
  const user = useSelector((state: reduxStoreState) => state.user);
  useEffect(() => {
    if (user.email) {
      history.push("/");
      try {
        sessionStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("로컬 스토리지 저장에 실패했습니다");
      }
    }
  }, [user, history]);
}
