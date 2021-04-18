import React from "react";
import "./styles.css";

const Commute = () => {
  return (
    <div id="Commute">
      <div className="commute-page">
          <div className="commute-user">
            <span className="commute-user-name">이도현  </span>
            <span>님 안녕하세요</span>
          </div>

          <div className="commute-btn">
            <button className="attendance">출근</button>
            <button className="leave">퇴근</button>
          </div>

          <div className="commute-result">
              <span>
                  이도현
              </span>
              <span>
                  님 아직 출근 하지 않으셨습니다
              </span>
          </div>
      </div>
    </div>
  );
};

export default Commute;
