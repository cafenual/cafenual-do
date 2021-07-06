import React, { useEffect, useState } from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdDelete,
  MdAdd,
} from "react-icons/md";
import "./styles.scss";

interface TransitionListProps {
  date: {
    year: number;
    month: number;
    day: number;
  };
}

const TransitionList = ({ date }: TransitionListProps) => {
  const { year, month, day } = date;
  return (
    <div id="TransitionList">
      <div className="current-date">
        <h4>
          {year}년 {month}월 {day}일
        </h4>
      </div>
      <div className="transition-input">
        <input
          className="input-active"
          type="text"
          placeholder="전달 사항을 입력해 주세요"
        />
        <button type="button" className="add">
          <MdAdd size="24" />
        </button>
      </div>
      <div className="transition-list">
        <ul></ul>
      </div>
    </div>
  );
};

export default TransitionList;
