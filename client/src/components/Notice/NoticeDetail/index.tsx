import useNoticeDetailEffect from "hooks/notice/useNoticeDetailEffect";
import "./styles.scss";

const NoticeDetail = () => {
  const { title, content, date, noticeId } = useNoticeDetailEffect();
  return (
    <>
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
            <button type="button" className="btn-list">
              삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeDetail;
