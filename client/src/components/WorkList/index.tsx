import WorkListItem from "components/WorkListItem";
import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import "./styles.scss";
import { CgMathPlus } from "react-icons/cg";

const fakeData = [
  {
    title: "오전",
    work: [
      "바닥 쓸기",
      "싱크대 청소",
      "오픈 하기",
      "포스기 켜기",
      "바닥 쓸기",
      "싱크대 청소",
      
    ],
  },
  {
    title: "오픈",
    work: ["12", "234243", "345435435345", "4554654645"],
  },
  {
    title: "마감",
    work: ["바닥 닦기", "음식물 버리기", "마감 하기", "포스기 끄기"],
  },
  {
    title: "야간",
    work: ["234234324", "345345435", "546454ㄴㅇㄹ", "ㄴㅇㄹㄹ"],
  },
  {
    title: "야간",
    work: ["234234324", "345345435", "546454ㄴㅇㄹ", "ㄴㅇㄹㄹ", "234234324"],
  },
];

const WorkList = () => {
  return (
    <>
      <div id="WorkList">
        <div className="inner-worklist">
          {fakeData.map((data, index) => (
            <div className="list" key={index}>
              <div className="title">
                <div className="txt">
                  <span className="txt-tit">{data.title}</span>
                  <span className="txt-len">({data.work.length})</span>
                </div>

                <AiOutlineEllipsis size="30" />
              </div>
              <WorkListItem work={data.work} />
              <button className="add-task-btn">
                <CgMathPlus size="20" />할 일 추가
              </button>
            </div>
          ))}

          <div className="list">
            <button className="add-task-btn">
              <CgMathPlus size="20" />
              업무 추가
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkList;
