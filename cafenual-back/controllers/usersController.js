import User from "../models/User";
import cookieParser from "cookie-parser";

// 회원가입
export const join = (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 디비에 저장한다
  const user = new User(req.body); // 사용자가 입력한 값이 여기 req.body로 담겨서 들어옴
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      // status(200)은 성공했다는 의미임
      success: true,
    });
  });
};

// 로그인
export const login = (req, res) => {
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

      // 비밀번호가 맞다면 토큰 생성하기
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다. 어디에? 쿠키에
        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
};

// 권한
export const auth = (req, res) => {
  // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True 라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true, // 0 -> 일반유저     1-> 어드민 계정
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
  });
};

// 로그아웃

export const logout = (req, res) => {
  // findOneAndUpdate : 유저를 찾은 뒤 업데이트를 시켜줌

  User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    {
      token: "",
    },
    (err, user) => {
      if (err)
        return res.json({
          success: false,
          err,
        });

      return res.status(200).send({
        success: true,
      });
    }
  );
};
