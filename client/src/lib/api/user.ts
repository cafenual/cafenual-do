import client from "./client";

// 회원가입
export const registerAPI = async (
  email: string,
  password: string,
  name: string
) => {
  const body = {
    email,
    password,
    name,
  };
  const response = await client.post("/user/register", body);
  return response.data;
};

// 로그인
export const login = async (email: string, password: string) => {
  const body = {
    email,
    password,
  };
  const response = await client.post("/user/login", body);
  return response.data.user;
};

// 로그아웃
export const logout = async () => {
  const response = await client.post("/user/logout");
  return response.data;
};
