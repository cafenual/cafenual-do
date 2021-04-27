import MenuCategory from "components/MenuCategory";
import MenuList from "components/MenuList";
import React from "react";

interface MenuViewProps {
  match : any;
}

const MenuView: React.FunctionComponent<MenuViewProps> = ({ match }) => {

  const category = match.params.category || 'all';

  return (
    <div id="menu-page">
      <MenuCategory />
      <MenuList />
    </div>
  );
};

export default MenuView;
