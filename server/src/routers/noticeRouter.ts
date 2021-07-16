import express from "express";
import * as noticeCtrl from "../controllers/noticeController";
import checkAdmin from "../lib/checkAdmin";
import checkLoggedIn from "../lib/checkLoggedIn";

const router = express.Router();

router.post("/create", checkLoggedIn, checkAdmin, noticeCtrl.createNotice); // 공지생성
router.get("/read", checkLoggedIn, noticeCtrl.readNotice); // 공지 조회
router.get(
  "/read/detail/:noticeId",
  checkLoggedIn,
  noticeCtrl.readNoticeDetail
); // 공지 상세보기
router.delete(
  "/delete/:noticeId",
  checkLoggedIn,
  checkAdmin,
  noticeCtrl.deleteNotice
); // 공지 삭제

router.patch("/update", checkLoggedIn, checkAdmin, noticeCtrl.updateNotice); // 공지 수정
export default router;
