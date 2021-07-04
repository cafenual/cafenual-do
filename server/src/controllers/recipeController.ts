import { Request, Response } from "express";
import Category from "../models/category";
import mongoose from "mongoose";
import Menu from "../models/menu";

// 카테고리 생성
export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  const category = await Category.findOne({ name });

  if (!category) {
    const newCategory = new Category({ name });
    await newCategory.save();
    const currentCategory = await Category.find();
    return res.status(201).json({
      success: true,
      currentCategory,
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
    res.status(500).json({
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
    res.status(500).json({
      success: false,
      message: "카테고리 업데이트에 실패했습니다.",
    });
  }
};

// 카테고리 삭제
export const deleteCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  try {
    await Category.findByIdAndDelete({
      _id: categoryId,
    });

    const categories = await Category.find();

    res.status(200).json({
      success: true,
      categories,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "카테고리 삭제를 실패하였습니다",
    });
  }
};

// 메뉴 등록
export const createMenu = async (req: Request, res: Response) => {
  const { name, description, categoryId, recipe } = req.body;

  const existCategory = await Category.findOne({ _id: categoryId });
  if (!existCategory) {
    return res.status(400).json({
      success: false,
      message: "해당 카테고리가 존재하지 않습니다",
    });
  }

  try {
    const menu = new Menu(req.body);
    await menu.save();
    return res.status(201).json({
      success: true,
      menu,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 메뉴 상세보기
export const readMenuDetail = async (req: Request, res: Response) => {
  const { menuid } = req.params;

  try {
    const menu = await Menu.findOne({
      _id: menuid,
    });

    if (!menu) {
      res.status(400).json({
        success: false,
        message: "해당 메뉴가 존재하지 않습니다",
      });
    }

    res.status(200).json({
      success: true,
      menu,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};
