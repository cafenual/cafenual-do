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

router.post("/login", (req, res) => {
  // 요청한 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }

    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인"
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      }

      // 비밀번호가 맞다면 토큰생성하기
      // 토큰 생성은 나중에 할 거기 때문에 우선 return true로 설정하자
      return res.status(200).json({
        loginSuccess: true,
        userId: user._id,
      });
    });
  });
});

module.exports = router;
