import express from "express";
import * as recipeCtrl from "../controllers/recipeController";

const router = express.Router();

router.post("/category/create", recipeCtrl.createCategory); // 카테고리 생성

export default router;
