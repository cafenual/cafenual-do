import express from "express";
import mongoose from "mongoose";
import config from "./config/key";
import User from "./models/User";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
// application/json 이라는걸 클라이언트에서 받아와서 분석하기 위해 넣어준것
app.use(bodyParser.json());


mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected.... "))
  .catch((err) => console.log(err));

// 회원가입
app.post("/api/users/join", (req, res) => {
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

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
