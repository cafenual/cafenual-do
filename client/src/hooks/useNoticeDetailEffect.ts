import { getNoticeDetail } from "lib/api/notice";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

interface MatchParams {
  noticeId: string;
}

export default function useNoticeDetailEffect() {
  const match = useRouteMatch<MatchParams>();
  const noticeId = match.params.noticeId;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [important, setImportant] = useState(false);

  useEffect(() => {
    const getNotice = async () => {
      try {
        const notice = await getNoticeDetail(noticeId);
        setTitle(notice.title);
        setContent(notice.content);
        setDate(notice.createdAt);
        setImportant(notice.important);
      } catch (e) {
        alert("공지를 불러오는데 실패했습니다.");
      }
    };

    getNotice();
  }, [noticeId]);
  return {
    title,
    content,
    date,
    important,
    noticeId,
  };
}
