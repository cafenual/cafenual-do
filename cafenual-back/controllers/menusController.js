import Menu from "../models/Menu";

// 메뉴 업로드
export const upload = (req, res) => {
  const menu = new Menu(req.body);
  console.log(menu);
  menu.save((err, menuInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
};

// 메뉴 불러오기
export const getMenu = (req, res) => {
  Menu.find().exec((err, menu) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      success: true,
      menu,
    });
  });
};

// 메뉴 상세정보 불러오기
export const getMenuDetail = (req, res) => {
  console.log(req.body);
  Menu.findOne({ _id: req.body.menuId }, (err, menu) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      success: true,
      menu,
    });
  });
};

// 메뉴 수정
export const menuModify = (req, res) => {
  console.log("수정할 매뉴 : " + req.body);
  Menu.findOneAndUpdate(
    { _id: req.body.menuId },
    {
      menuName: req.body.menuName,
      menuRecipe: req.body.menuRecipe,
      menuCategory: req.body.menuCategory,
    },
    (err, menu) => {
      if (err) return res.status(400).json({ success: false });
      return res.status(200).json({ success: true, menu });
    }
  );
};

// 메뉴 삭제
export const menuDelete = (req, res) => {
  console.log("삭제할 메뉴 : " + req.body);
  Menu.findOneAndDelete({ _id: req.body.menuId }, (err, menu) => {
    if (err) return res.status(400).json({ success: false });
    return res.status(200).json({ success: true });
  });
};
