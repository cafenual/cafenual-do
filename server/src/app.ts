import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userAuth from "./lib/userAuth";
import recipeRouter from "./routers/recipeRouter";
import userRouter from "./routers/userRouter";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// middleware
app.use(userAuth);

// router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/recipe", recipeRouter);

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
