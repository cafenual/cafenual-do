import { Request, Response } from "express";
import Category from "../models/category";

// 카테고리 생성
export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
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

// 카테고리 수정
export const updateCategory = async (req: Request, res: Response) => {
  const { categoryId, name } = req.body;
  try {
    const category = await Category.findByIdAndUpdate(
      { _id: categoryId },
      { name }
    );

    if (!category) {
      res.status(400).json({
        success: false,
        message: "해당 카테고리가 존재하지 않습니다",
      });
    }

    const UpdatedCategory = await Category.findById({
      _id: categoryId,
    });

    res.status(200).json({
      success: true,
      UpdatedCategory,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "카테고리 업데이트에 실패했습니다.",
    });
  }
};
