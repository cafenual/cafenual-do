import express from "express";
import * as recipeCtrl from "../controllers/recipeController";
import checkAdmin from "../lib/checkAdmin";
import checkLoggedIn from "../lib/checkLoggedIn";

const router = express.Router();

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

export default router;
