import useNoticeDetailEffect from "hooks/useNoticeDetailEffect";
import Aside from "layouts/Aside";
import Header from "layouts/Header";
import "./styles.scss";

const NoticeDetail = () => {
  const { title, content, date, noticeId } = useNoticeDetailEffect();
  return (
    <>
      <Header />
      <Aside />
      <div id="Notice" className="side-layout">
        <div className="cont">
          <div className="content-tit">
            {title}
            <div className="tit-date">{date.slice(0, 10)}</div>
          </div>
          <div
            className="content-cont"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <div className="content-btn">
            <a href={`/notice`} className="btn-list">
              목록
            </a>
            <a href={`/notice/edit/${noticeId}`} className="btn-list">
              수정
            </a>
            <a href="" className="btn-list">
              삭제
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeDetail;
