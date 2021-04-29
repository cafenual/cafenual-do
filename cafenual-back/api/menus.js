import express from "express";
import Menu from "../models/Menu";

const router = express.Router();

//메뉴 업로드

router.post("/upload", (req, res) => {
  console.log(req.body);
  const menu = new Menu(req.body);
  console.log(menu);
  menu.save((err, menuInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/getMenu", (req, res) => {
  Menu.find().exec((err, menu) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, menu });
  });
});

module.exports = router;
