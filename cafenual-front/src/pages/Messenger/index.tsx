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
              <a href="/messenger">
                <div className="ico">
                  <AiOutlineTeam size="34" />
                </div>
                친구목록
              </a>
            </li>
            <li>
              <a href="/messenger/message">
                <div className="ico">
                  <AiOutlineMail size="34" />
                </div>
                쪽지함
              </a>
            </li>
            <li>
              <a>
                <div className="ico">
                  <AiOutlineMessage size="34" />
                </div>
                대화
              </a>
            </li>
            <li>
              <a>
                <div className="ico">
                  <AiOutlineSetting size="34" />
                </div>
                설정
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
