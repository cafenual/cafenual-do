import express from "express";
import User from "../models/User";

const router = express.Router();

// 회원가입
router.post("/join", (req, res) => {
  // 회원가입 할 떄 필요한 정보들을 client에서 가져오면
  // 그것들을 디비에 저장한다
  console.log(req.body);
  const user = new User(req.body); // 사용자가 입력한 값이 여기 req.body로 담겨서 들어옴 , bodyparser 라이브러리 덕분임
  console.log(user);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      //status(200)은 성공했다는 의미임
      success: true,
    });
  });
});

module.exports = router;
