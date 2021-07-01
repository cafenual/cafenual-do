import express from "express";
import * as recipeCtrl from "../controllers/recipeController";
import checkLoggedIn from "../lib/checkLoggedIn";

const router = express.Router();

router.post("/category/create", checkLoggedIn, recipeCtrl.createCategory); // 카테고리 생성
router.get("/category", recipeCtrl.readCategory);

export default router;
