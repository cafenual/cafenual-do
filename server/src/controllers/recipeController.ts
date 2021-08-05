import { Request, Response } from "express";
import Category from "../models/category";
import Comment from "../models/comment";
import Menu from "../models/menu";
import User from "../models/user";
import multer from "multer";

// multer-optional
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
var upload = multer({ storage: storage }).single("menu_img");

// 이미지 업로드
export const uploadImg = (req: Request, res: Response) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
};
// 카테고리 생성
export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const category = await Category.findOne({ name });

    if (category) {
      return res.status(400).json({
        success: false,
        message: "이미 카테고리가 존재합니다",
      });
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    const categories = await Category.find();

    return res.status(201).json({
      success: true,
      categories,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
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
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 카테고리 삭제
export const deleteCategory = async (req: Request, res: Response) => {
  const { categoryId } = req.params;

  try {
    const category = await Category.findByIdAndDelete({
      _id: categoryId,
    });

    if (!category) {
      return res.status(400).json({
        success: false,
        message: "해당 카테고리가 존재하지 않습니다.",
      });
    }
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 메뉴 등록
export const createMenu = async (req: Request, res: Response) => {
  const { name, description, categoryId, recipe, image } = req.body;

  const existCategory = await Category.findById({ _id: categoryId });
  if (!existCategory) {
    return res.status(400).json({
      success: false,
      message: "해당 카테고리가 존재하지 않습니다",
    });
  }
  console.log("dd");
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
  const { menuId } = req.params;

  try {
    const menu = await Menu.findById({
      _id: menuId,
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

// 메뉴 전체 보기
export const readAllMenu = async (req: Request, res: Response) => {
  try {
    const menus = await Menu.find().populate("categoryId");
    res.status(200).json({
      success: true,
      menus,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 메뉴 수정
export const updateMenu = async (req: Request, res: Response) => {
  const { menuId, name, description, categoryId, recipe, image } = req.body;
  try {
    const category = await Category.findById({ _id: categoryId });
    if (!category) {
      return res.status(400).json({
        success: false,
        message: "해당 카테고리가 존재하지 않습니다",
      });
    }

    const menu = await Menu.findByIdAndUpdate(
      { _id: menuId },
      { name, description, recipe, categoryId, image }
    );

    if (!menu) {
      return res.status(400).json({
        success: false,
        message: "해당 매뉴가 존재하지 않습니다",
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 메뉴 삭제
export const deleteMenu = async (req: Request, res: Response) => {
  const { menuId } = req.params;

  try {
    const menu = await Menu.findByIdAndDelete({ _id: menuId });
    if (!menu) {
      res.status(400).json({
        success: false,
        message: "해당 매뉴가 존재하지 않습니다.",
      });
    }
    return res.status(200).json({
      success: true,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 댓글 작성
export const createComment = async (req: Request, res: Response) => {
  const { content, writerId, menuId } = req.body;
  try {
    const writer = await User.findById({ _id: writerId });
    if (!writer) {
      return res.status(400).json({
        success: false,
        message: "해당 유저가 존재하지 않습니다.",
      });
    }

    const menu = await Menu.findById({ _id: menuId });
    if (!menu) {
      return res.status(400).json({
        success: false,
        message: "해당 매뉴가 존재하지 않습니다",
      });
    }

    const newComment = new Comment({ content, writer, menu });
    await newComment.save();

    const comments = await Comment.find({ menu: menuId }).populate("writer"); // 만약 여러개를 알고 싶으면 populate("writer menu") 이런식
    return res.status(201).json({
      success: true,
      comments,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 댓글 조회
export const readComment = async (req: Request, res: Response) => {
  const { menuId } = req.params;
  try {
    const comments = await Comment.find({ menu: menuId }).populate("writer");
    res.status(200).json({
      success: true,
      comments,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 댓글 수정
export const updateComment = async (req: Request, res: Response) => {
  const { content, writerId, menuId, commentId } = req.body;

  try {
    const comment = await Comment.findOneAndUpdate(
      {
        _id: commentId,
        writer: writerId,
        menu: menuId,
      },
      {
        content,
      }
    );

    if (!comment) {
      return res.status(400).json({
        success: false,
        message: "해당하는 댓글이 존재하지 않습니다",
      });
    }

    const comments = await Comment.find({ menu: menuId }).populate("writer");
    return res.status(200).json({
      success: true,
      comments,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 댓글 삭제
export const deleteComment = async (req: Request, res: Response) => {
  const { commentId, menuId } = req.params;
  const { user } = res.locals;
  try {
    const comment = await Comment.findOneAndDelete({
      _id: commentId,
      menu: menuId,
      writer: user._id,
    });

    if (!comment) {
      return res.status(400).json({
        success: false,
        message: "해당 댓글이 존재하지 않습니다.",
      });
    }

    const comments = await Comment.find({ menu: menuId }).populate("writer");
    return res.status(200).json({
      success: true,
      comments,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};
