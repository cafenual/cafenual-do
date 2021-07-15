import express from "express";
import * as noticeCtrl from "../controllers/noticeController";
import checkAdmin from "../lib/checkAdmin";
import checkLoggedIn from "../lib/checkLoggedIn";

const router = express.Router();

router.post("/create", checkLoggedIn, checkAdmin, noticeCtrl.createNotice); // 공지생성
router.get("/read/important", checkLoggedIn, noticeCtrl.readImportantNotice); // 중요 공지 조회
router.get("/read/normal", checkLoggedIn, noticeCtrl.readNormalNotice); // 일반 공지 조회
export default router;
