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

// User API
app.use("/api/users", require("./api/users"));
app.use("/api/menus", require("./api/menus"));

// app.post("/api/test/test1", (req, res) => {   // 몽고디비에서 데이터 불러오기 테스트용 성공!
//   User.find({ role: req.body.role }).exec((err, info) => {
//     if (err) return res.status(400).send(err);

//     res.status(200).json({ success: true, info });
//   });
// });

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
