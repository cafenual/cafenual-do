import { createNotice } from "lib/api/notice";
import { reduxStoreState } from "modules";
import { useSelector } from "react-redux";

export default function useNoticeForm() {
  const notice = useSelector((state: reduxStoreState) => state.notice);
  const { title, content, important } = notice;

  const upload = async () => {
    try {
      await createNotice(title, content, important);
      window.location.replace("/notice");
    } catch (e) {
      alert("공지 등록에 실패했습니다.");
    }
  };

  return {
    upload,
  };
}
