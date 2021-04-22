import React from "react";
import "./styles.css";
import { AiFillMail, AiFillMessage } from "react-icons/ai";
import Messenger from "pages/Messenger";

const MessengerFriendsList = () => {
  return (
    <>
      <Messenger />

      <div id="FriendsList">
        <div className="friends-list-page">
          <ul>
            <li className="friends-info">
              <div className="box">
                <div className="messenger-part-time">오전</div>
                <div className="messenger-info">
                  <span className="messenger-name">이도현</span>
                  <span className="messenger-position">매니저</span>
                </div>
              </div>

              <div className="box">
                <div className="messenger-message">
                  <AiFillMail size="24" />
                </div>
                <div className="messenger-conversation">
                  <AiFillMessage size="24" />
                </div>
              </div>
            </li>

            <li className="friends-info">
              <div className="box">
                <div className="messenger-part-time">오전</div>
                <div className="messenger-info">
                  <span className="messenger-name">이도현</span>
                  <span className="messenger-position">매니저</span>
                </div>
              </div>

              <div className="box">
                <div className="messenger-message">
                  <AiFillMail size="24" />
                </div>
                <div className="messenger-conversation">
                  <AiFillMessage size="24" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MessengerFriendsList;
