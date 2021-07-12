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

export const updateCategory = async (categoryId: string, name: string) => {
  const body = {
    categoryId,
    name,
  };
  const response = await axios.patch(`/api/v1/recipe/category/update`, body);
  return response.data.categories;
};
