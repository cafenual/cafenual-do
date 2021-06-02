import axios from "axios";
import React, { useEffect, useState } from "react";

const RightNav = () => {
  const [username, setUserName] = useState("");

  const onClick = () => {
    let body = {
      _id: username,
    };
    console.log(window.localStorage.getItem("userId"));
    axios.post("/api/users/logout", body).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        window.localStorage.removeItem("userId");
        setUserName("");
      }
    });
  };

  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    setUserName(`${userId}`);
    console.log(username.length);
  }, []);

  if (window.localStorage.getItem("userId")) {
    return (
      <div className="right-nav">
        <ul>
          <li>
            <button onClick={onClick}>로그아웃</button>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="right-nav">
        <ul>
          <li>
            <a href="/login">로그인</a>
          </li>
          <li>
            <a href="/join">회원가입</a>
          </li>
        </ul>
      </div>
    );
  }
  
};

export default RightNav;
