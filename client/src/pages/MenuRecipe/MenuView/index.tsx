import MenuCategory from "components/MenuRecipeCategory";
import MenuList from "components/MenuRecipeList";
import Header from "layouts/Header";
import StaffSideNav from "layouts/SideNav/StaffSideNav";
import React from "react";
import "./styles.css";

interface MenuViewProps {
  match: any;
}

const MenuView: React.FunctionComponent<MenuViewProps> = ({ match }) => {
  const category = match.params.category || "all"; // props를 match 로 하면 "/menu/list/:category?" 이부분의 category 값을 가져올 수 있음
  console.log(match);

  return (
    <>
      <Header />
      <StaffSideNav />
      <div id="menu-page">
        <MenuCategory />
        <MenuList category={category} />
      </div>
    </>
  );
};

export default MenuView;
