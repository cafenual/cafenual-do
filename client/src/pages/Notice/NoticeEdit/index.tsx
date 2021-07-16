import NoticeForm from "components/NoticeForm";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import useNoticeForm from "hooks/useNoticeForm";
import { useEffect } from "react";
import { getNoticeDetail } from "lib/api/notice";
import { useDispatch } from "react-redux";
import { SetNoticeData } from "modules/notice";

interface MatchProps {
  noticeId: string;
}

const NoticeEdit = () => {
  const match = useRouteMatch<MatchProps>();
  const noticeId = match.params.noticeId;
  const { edit } = useNoticeForm();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    await edit(noticeId);
  };

  useEffect(() => {
    const getData = async () => {
      const notice = await getNoticeDetail(noticeId);
      const body = {
        title: notice.title,
        content: notice.content,
        important: notice.important,
      };
      dispatch(SetNoticeData(body));
    };
    getData();
  }, [dispatch, noticeId]);

  return (
    <>
      <Header />
      <Aside />
      <NoticeForm onSubmit={onSubmit} />
    </>
  );
};

export default NoticeEdit;
