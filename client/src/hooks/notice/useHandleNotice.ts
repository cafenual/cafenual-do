import { createNotice, updateNotice } from "lib/api/notice";
import { reduxStoreState } from "modules";
import { SetNotice } from "modules/notice";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

interface matchProps {
  noticeId: string;
}

export default function useHandleNotice() {
  const notice = useSelector((state: reduxStoreState) => state.notice);
  const { title, content, important } = notice;
  const match = useRouteMatch<matchProps>();
  const noticeId = match.params.noticeId;
  const dispatch = useDispatch();

  // 공지 등록
  const onUpload = async () => {
    try {
      await createNotice(title, content, important);
      window.location.replace("/notice");
    } catch (e) {
      alert("공지 등록에 실패했습니다.");
    }
  };

  // 공지 수정
  const onEdit = async () => {
    try {
      await updateNotice(noticeId, title, content, important);
      window.location.replace(`/notice/detail/${noticeId}`);
    } catch (e) {
      alert("공지 수정에 실패했습니다.");
    }
  };

  // 공지 (등록,수정)Form Input 관리
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    let body = {
      key: name,
      value,
    };
    dispatch(SetNotice(body));
  };

  // 공지 (등록,수정)Form  중요한 공지 선택 박스 관리
  const onChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    let body = {
      key: "important",
      value: !important,
    };
    dispatch(SetNotice(body));
  };

  return {
    onUpload,
    onEdit,
    onChange,
    onChangeCheckBox,
    title,
    content,
    important,
  };
}
