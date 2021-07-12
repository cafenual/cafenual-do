import axios from "axios";

// 메뉴 리스트 조회
export const getMenus = async () => {
  const response = await axios.get("/api/v1/recipe/menu");
  return response.data.menus;
};

// 메뉴 상세보기
export const getMenuDetail = async (menuId: string) => {
  const response = await axios.get(`/api/v1/recipe/menu/${menuId}`);
  return response.data.menu;
};

// 메뉴 삭제
export const deleteMenu = async (menuId: string) => {
  const response = await axios.delete(`/api/v1/recipe/menu/${menuId}`);
  return response.data;
};
