import client from "./client";

// 메뉴 리스트 조회
export const getMenus = async () => {
  const response = await client.get("/recipe/menu");
  return response.data.menus;
};

// 메뉴 상세보기
export const getMenuDetail = async (menuId: string) => {
  const response = await client.get(`/recipe/menu/${menuId}`);
  return response.data.menu;
};

// 메뉴 삭제
export const deleteMenu = async (menuId: string) => {
  const response = await client.delete(`/recipe/menu/${menuId}`);
  return response.data;
};

// 메뉴 등록
export const createMenu = async (
  name: string | undefined,
  description: string | undefined,
  categoryId: string | undefined,
  recipe: string | undefined,
  image: string | undefined
) => {
  const body = {
    name,
    description,
    categoryId,
    recipe,
    image,
  };
  const response = await client.post("/recipe/menu/create", body);
  return response;
};

// 이미지 등록
export const createImage = async (fd: FormData) => {
  const response = await client.post("/recipe/uploadImg", fd);
  return response.data.image;
};

// 메뉴 수정
export const updateMenu = async (
  name: string | undefined,
  description: string | undefined,
  categoryId: string | undefined,
  recipe: string | undefined,
  image: string | undefined,
  menuId: string | undefined
) => {
  const body = {
    name,
    description,
    categoryId,
    recipe,
    image,
    menuId,
  };
  console.log(body);
  const response = await client.patch("/recipe/menu/update", body);
  return response;
};
