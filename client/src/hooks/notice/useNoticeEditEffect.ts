import { SetNoticeData } from "modules/notice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useNoticeDetailEffect from "./useNoticeDetailEffect";

export default function useNoticeEditEffect() {
  const dispatch = useDispatch();
  const { title, content, important } = useNoticeDetailEffect();
  useEffect(() => {
    const body = {
      title,
      content,
      important,
    };
    dispatch(SetNoticeData(body));
  }, [title, content, important, dispatch]);
}
