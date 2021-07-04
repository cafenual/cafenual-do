import express from "express";
import * as recipeCtrl from "../controllers/recipeController";
import checkAdmin from "../lib/checkAdmin";
import checkLoggedIn from "../lib/checkLoggedIn";

const router = express.Router();

// 카테고리
router.post(
  "/category/create",
  checkLoggedIn,
  checkAdmin,
  recipeCtrl.createCategory
); // 카테고리 생성
router.get("/category", recipeCtrl.readCategory); // 전체 카테고리 조회
router.patch(
  "/category/update",
  checkLoggedIn,
  checkAdmin,
  recipeCtrl.updateCategory
);
router.delete("/category/:categoryId", checkAdmin, recipeCtrl.deleteCategory);

// 메뉴
router.post("/menu/create", checkLoggedIn, checkAdmin, recipeCtrl.createMenu); // 메뉴 등록
router.get("/menu/:menuid", checkLoggedIn, recipeCtrl.readMenuDetail) // 메뉴 상세보기

export default router;
