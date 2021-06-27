import express from "express";
import * as userCtrl from "../controllers/userController";

const router = express.Router();

// 회원가입
router.post("/register", userCtrl.register);

export default router;
