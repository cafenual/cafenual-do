import { reduxStoreState } from "modules";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useCheckLoggedIn() {
  const user = useSelector((state: reduxStoreState) => state.user);
  const history = useHistory();
  useEffect(() => {
    if (!user.email) {
      history.push("/login");
    }
  }, [history, user]);
}
