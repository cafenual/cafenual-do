import express from "express";
import { auth, join, login } from "../controllers/usersController";
import authMiddleware from "../middleware/auth";

const router = express.Router();

router.post("/join", join); // 회원가입
router.post("/login", login); // 로그인
router.get("/auth",authMiddleware, auth); // 권한

export default router;
