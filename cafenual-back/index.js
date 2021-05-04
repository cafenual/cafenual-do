import express from "express";
import mongoose from "mongoose";
import config from "./config/key";
import User from "./models/User";

import usersRouter from "./api/users";
import menusRouter from "./api/menus";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
app.use("/api/users", usersRouter);
app.use("/api/menus", menusRouter);

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
