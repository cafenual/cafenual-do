import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter";
import "dotenv/config";
import userAuth from "./lib/userAuth";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(userAuth);

app.use("/api/v1/user", userRouter);

// DB 실행
mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connect ✅ MongoDB Connected.... "))
  .catch((err) => console.log(err));

// 서버 실행
app.listen(PORT, () => {
  console.log(`connect ✅ http://localhost:${PORT}`);
});
