import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello");
});

app.listen(4000, () => {
  console.log("start : http://localhost:4000");
});
