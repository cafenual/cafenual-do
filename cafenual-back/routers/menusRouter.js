import express from "express";
import { getMenu, getMenuDetail, upload } from "../controllers/menusController";
import Menu from "../models/Menu";

const router = express.Router();

router.post("/upload", upload); //메뉴 업로드
router.get("/getMenu", getMenu); // 메뉴 불러오기
router.post("/getMenuDetail", getMenuDetail); // 메뉴 상세 불러오기

export default router;
