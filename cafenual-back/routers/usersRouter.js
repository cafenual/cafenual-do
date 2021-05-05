import express from "express";
import { auth, join, login, logout } from "../controllers/usersController";
import authMiddleware from "../middleware/auth";

const router = express.Router();

// /api/users //

router.post("/join", join); // 회원가입
router.post("/login", login); // 로그인
router.get("/auth", authMiddleware, auth); // 권한
router.get("/logout", authMiddleware, logout);

export default router;
