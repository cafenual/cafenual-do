import React, { useState } from "react";
import "./styles.css";

const Commute = () => {
  const [commuteMessage, setCommuteMessage] = useState("출근전");
  const [commuteState, setCommuteState] = useState({
    attendanceState: 0,
    leaveState: 0,
  });

  const { attendanceState, leaveState } = commuteState;

  // 날짜 객체
  let now = new Date();
  let today = {
    year: now.getFullYear(),
    month: now.getMonth() + 1, // 0부터 1월로 시작해서 +1 해줘야됨
    date: now.getDate(),
    day: now.getDay(),
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };

  let { year, month, date, day, hours, minutes } = today;
  let week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const attendance = () => {
    if (attendanceState === 1) {
      alert("이미 출근을 하였습니다");
      return;
    }
    setCommuteMessage(` ${hours}:${minutes} 출근 완료`);
    setCommuteState({
      ...commuteState,
      attendanceState: 1,
    });
  };

  const leave = () => {
    if (attendanceState === 0) {
      alert("아직 출근을 하지 않았습니다");
      return;
    }

    if (leaveState === 1) {
      alert("이미 퇴근을 하였습니다");
      return;
    }

    setCommuteMessage(` ${hours}:${minutes} 퇴근 완료`);
    setCommuteState({
      ...commuteState,
      leaveState: 1,
    });
  };

  return (
    <div id="Commute">
      <div className="commute-page">
        <div className="commute-date">
          <span>
            {year}-{month}-{date} {week[day]}
          </span>
        </div>

        <div className="commute-user">
          <span className="commute-user-name">이도현님 </span>
          <span>{commuteMessage}</span>
        </div>

        <div className="commute-btn">
          <button
            style={
              attendanceState === 0
                ? { background: "#444263" }
                : { background: "#89898d" }
            }
            className="attendance btn"
            onClick={attendance}
          >
            출근
          </button>
          <button
            style={
              leaveState === 0
                ? { background: "#444263" }
                : { background: "#89898d" }
            }
            className="leave btn"
            onClick={leave}
          >
            퇴근
          </button>
        </div>

        <div className="commute-result">
          <span>좋은 하루 되세요 ! </span>
        </div>
      </div>
    </div>
  );
};

export default Commute;
