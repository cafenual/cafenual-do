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

// 공지 조회
export const readNotice = async (req: Request, res: Response) => {
  try {
    let importantNotices = await Notice.find({ important: true });
    importantNotices = [...importantNotices.reverse()];
    let normalNotices = await Notice.find({ important: false });
    normalNotices = [...normalNotices.reverse()];
    const notices = importantNotices.concat(normalNotices);
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

// 공지 상세 보기
export const readNoticeDetail = async (req: Request, res: Response) => {
  const { noticeId } = req.params;
  try {
    const notice = await Notice.findById({
      _id: noticeId,
    });

    if (!notice) {
      res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다",
      });
    }

    res.status(200).json({
      success: true,
      notice,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};

// 공지 삭제
export const deleteNotice = async (req: Request, res: Response) => {
  const { noticeId } = req.params;

  try {
    const notice = await Notice.findByIdAndDelete({ _id: noticeId });
    if (!notice) {
      res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다",
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

// 공지 수정
export const updateNotice = async (req: Request, res: Response) => {
  const { noticeId, title, content, important } = req.body;
  try {
    const notice = await Notice.findByIdAndUpdate(
      { _id: noticeId },
      { title, content, important },
      { new: true }
    );

    if (!notice) {
      return res.status(400).json({
        success: false,
        message: "해당 공지사항이 존재하지 않습니다",
      });
    }

    return res.status(200).json({
      success: true,
      notice,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      e,
    });
  }
};
