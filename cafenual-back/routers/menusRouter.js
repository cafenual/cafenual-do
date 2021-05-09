import express from "express";
import {
  getMenu,
  getMenuDetail,
  menuDelete,
  menuModify,
  upload,
} from "../controllers/menusController";
import Menu from "../models/Menu";

const router = express.Router();

router.post("/upload", upload); //메뉴 업로드
router.get("/getMenu", getMenu); // 메뉴 불러오기
router.post("/getMenuDetail", getMenuDetail); // 메뉴 상세 불러오기
router.post("/menuModify", menuModify); // 메뉴 수정하기
router.post("/menuDelete", menuDelete ) // 메뉴 삭제하기

export default router;
