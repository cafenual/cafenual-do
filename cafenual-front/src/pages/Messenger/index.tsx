import React from "react";
import "./styles.css";
import {
  AiOutlineTeam,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlineSetting,
} from "react-icons/ai";

const Messenger = () => {
  return (
    <div id="Messenger">
      <div className="messenger-page">
        <div className="messenger-page-menu">
          <ul>
            <li>
              <div className="ico">
                <AiOutlineTeam size="34" />
              </div>
              <div>친구목록</div>
            </li>
            <li>
              <div className="ico">
                <AiOutlineMail size="34" />
              </div>
              <div>쪽지함</div>
            </li>
            <li>
              <div className="ico">
                <AiOutlineMessage size="34" />
              </div>
              <div>대화</div>
            </li>
            <li>
              <div className="ico">
                <AiOutlineSetting size="34" />
              </div>
              <div>설정</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
