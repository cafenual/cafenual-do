import axios from "axios";

export const getCategories = async () => {
  const response = await axios.get("/api/v1/recipe/category");
  return response.data.categories;
};

export const createCategory = async (name: string) => {
  const body = { name };
  const response = await axios.post("/api/v1/recipe/category/create", body);
  return response.data.categories;
};

export const deleteCategory = async (categoryId: string | undefined) => {
  const response = await axios.delete(`/api/v1/recipe/category/${categoryId}`);
  return response.data.categories;
};
