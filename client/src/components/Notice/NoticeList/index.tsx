import React from "react";
import "./styles.scss";
import { AiOutlineSearch } from "react-icons/ai";
import Pagination from "components/Pagination";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import useNoticeListEffect from "hooks/notice/useNoticeListEffect";

const NoticeList = () => {
  const { pagedNotices, currentPage, handlePageChange, pageCount } =
    useNoticeListEffect();
  return (
    <>
      <div id="Notice" className="side-layout">
        <div className="cont">
          <div className="search-comm">
            <form action="">
              <fieldset>
                <input
                  type="text"
                  className="search-input"
                  placeholder="검색어를 입력해주세요"
                />
                <button type="submit" className="search-btn">
                  <AiOutlineSearch size="23" />
                </button>
              </fieldset>
            </form>
          </div>
          <div className="upload-comm">
            <a className="btn-type1" href="/notice/upload">
              글쓰기
            </a>
          </div>

          <div className="table-comm">
            <table className="table">
              <colgroup>
                <col className="left" />
                <col className="right" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">내용</th>
                  <th scope="col">등록일</th>
                </tr>
              </thead>
              <tbody>
                {pagedNotices.map((notice, index) => (
                  <tr key={index}>
                    <td className="td-left">
                      <div className="inner-cont">
                        <span className="inner-text">
                          {notice.important === true ? (
                            <Link
                              to={`/notice/detail/${notice._id}`}
                              className="link-text important"
                            >
                              [필독] {notice.title}
                            </Link>
                          ) : (
                            <Link
                              to={`/notice/detail/${notice._id}`}
                              className="link-text"
                            >
                              {notice.title}
                            </Link>
                          )}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="inner-cont inner-date">2021-05-19</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="paging-comm">
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoticeList;
