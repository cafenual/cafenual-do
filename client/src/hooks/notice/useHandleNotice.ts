import { createNotice, updateNotice } from "lib/api/notice";
import { reduxStoreState } from "modules";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

interface matchProps {
  noticeId: string;
}

export default function useHandleNotice() {
  const notice = useSelector((state: reduxStoreState) => state.notice);
  const { title, content, important } = notice;
  const match = useRouteMatch<matchProps>();
  const noticeId = match.params.noticeId;

  const onUpload = async () => {
    try {
      await createNotice(title, content, important);
      window.location.replace("/notice");
    } catch (e) {
      alert("공지 등록에 실패했습니다.");
    }
  };

  const onEdit = async () => {
    try {
      await updateNotice(noticeId, title, content, important);
      window.location.replace(`/notice/detail/${noticeId}`);
    } catch (e) {
      alert("공지 수정에 실패했습니다.");
    }
  };

  return {
    onUpload,
    onEdit,
  };
}
