import MenuCategory from "components/MenuCategory";
import MenuList from "components/MenuList";
import React from "react";

interface MenuViewProps {
  match: any;
}

const MenuView: React.FunctionComponent<MenuViewProps> = ({ match }) => {
  const category = match.params.category || "all"; // props를 match 로 하면 "/menu/list/:category?" 이부분의 category 값을 가져올 수 있음
  console.log(match);

  return (
    <div id="menu-page">
      <MenuCategory />
      <MenuList category={category} />
    </div>
  );
};

export default MenuView;
