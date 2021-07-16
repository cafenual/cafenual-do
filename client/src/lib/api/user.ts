import client from "./client";

export const login = async (email: string, password: string) => {
  const body = {
    email,
    password,
  };
  const response = await client.post("/user/login", body);
  return response.data.user;
};

export const logout = async () => {
  const response = await client.post("/user/logout");
  return response.data;
};
