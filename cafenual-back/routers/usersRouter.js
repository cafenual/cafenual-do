import express from "express";
import { join, login } from "../controllers/usersController";

const router = express.Router();

router.post("/join", join); // 회원가입
router.post("/login", login); // 로그인

export default router;
