import express from "express";
import * as recipeCtrl from "../controllers/recipeController";
import checkAdmin from "../lib/checkAdmin";
import checkLoggedIn from "../lib/checkLoggedIn";

const router = express.Router();

// test
router.post("/uploadImg", recipeCtrl.uploadImg);

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
router.get("/menu/:menuId", checkLoggedIn, recipeCtrl.readMenuDetail); // 메뉴 상세보기
router.get("/menu", recipeCtrl.readAllMenu); // 메뉴 전체 보기
router.patch("/menu/update", checkLoggedIn, checkAdmin, recipeCtrl.updateMenu); // 메뉴 업데이트
router.delete(
  "/menu/:menuId",
  checkLoggedIn,
  checkAdmin,
  recipeCtrl.deleteMenu
); // 메뉴 삭제

// 댓글
router.post("/comment/create", checkLoggedIn, recipeCtrl.createComment); //댓글 작성
router.get("/comment/:menuId", recipeCtrl.readComment); // 전체 댓글 조회
router.patch("/comment/update", checkLoggedIn, recipeCtrl.updateComment); // 댓글 수정
router.delete(
  "/comment/delete/:menuId/:commentId",
  checkLoggedIn,
  recipeCtrl.deleteComment
); // 댓글 삭제
export default router;
