import { NextFunction, Request, Response } from "express";

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.user.role !== "admin") {
    return res.status(400).json({
      success: false,
      message: "관리자 계정이 아닙니다.",
    });
  }
  return next();
};

export default checkAdmin;
