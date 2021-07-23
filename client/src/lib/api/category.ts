import client from "./client";

export const getCategoriesAPI = async () => {
  const response = await client.get("/recipe/category");
  return response.data.categories;
};

export const createCategoryAPI = async (name: string) => {
  const body = { name };
  const response = await client.post("/recipe/category/create", body);
  return response.data.categories;
};

export const deleteCategoryAPI = async (categoryId: string | undefined) => {
  const response = await client.delete(`/recipe/category/${categoryId}`);
  return response.data.categories;
};

export const updateCategoryAPI = async (categoryId: string, name: string) => {
  const body = {
    categoryId,
    name,
  };
  const response = await client.patch(`/recipe/category/update`, body);
  return response.data.categories;
};
