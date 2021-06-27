import express from "express";
import * as userCtrl from "../controllers/userController";

const router = express.Router();

// 회원가입
router.post("/register", userCtrl.register);
// 로그인
router.post("/login", userCtrl.login);

export default router;
