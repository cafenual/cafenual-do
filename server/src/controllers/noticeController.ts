import { Request, Response } from "express";
import Notice from "../models/notice";

// 공지 생성
export const createNotice = async (req: Request, res: Response) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();
    return res.status(201).json({
      success: true,
      notice,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 중요 공지 조회
export const readImportantNotice = async (req: Request, res: Response) => {
  try {
    const notices = await Notice.find({ important: true });
    return res.status(200).json({
      notices,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};

// 일반 공지 조회
export const readNormalNotice = async (req: Request, res: Response) => {
  try {
    const notices = await Notice.find({ important: false });
    return res.status(200).json({
      notices,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      e,
    });
  }
};


