import React from "react";
import _ from "lodash";
import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from "react-icons/ai";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  //   const pageCount = Math.ceil(contentCount / pageSize); // 몇 페이지가 필요한지 계산

  const pages = _.range(1, pageCount + 1); // 마지막 페이지에 보여줄 컨텐츠를 위해 +1을 해줌 https://lodash.com/docs/#range 참고
  return (
    <div className="inner-paging">
      <button
        type="button"
        onClick={() => onPageChange(1)}
        className="paging-btn paging-fst"
      >
        <AiOutlineDoubleLeft size="14" />
      </button>
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        className="paging-btn paging-prev"
      >
        <AiOutlineLeft size="14" />
      </button>
      <ul>
        {pages.map((page, index) => (
          <li key={index} className="paging-link">
            <button
              type="button"
              className={page === currentPage ? "active" : ""}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        className="paging-btn paging-next"
      >
        <AiOutlineRight size="14" />
      </button>
      <button
        type="button"
        onClick={() => onPageChange(pages.length)}
        className="paging-btn paging-last"
      >
        <AiOutlineDoubleRight size="14" />
      </button>
    </div>
  );
};

export default Pagination;
