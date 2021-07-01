import { Request, Response } from "express";
import Category from "../models/category";

// 카테고리 생성
export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  console.log(name);
  const category = await Category.findOne({ name });

  if (!category) {
    const newCategory = new Category({ name });
    await newCategory.save();
    return res.status(201).json({
      success: true,
      newCategory,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "이미 카테고리가 존재합니다",
    });
  }
};

// 카테고리 조회
export const readCategory = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e,
    });
  }
};
