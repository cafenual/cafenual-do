import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface menuState {
  _id?: string;
  name?: string;
  description?: string;
  categoryId?: string;
  recipe?: string;
  menus?: menuState[];
  loading?: boolean;
}

const initialState: menuState = {
  _id: "",
  name: "",
  description: "",
  categoryId: "",
  recipe: "",
  menus: [],
  loading: false,
};

export const getMenus = createAsyncThunk("menu/getMenus", async () => {
  const response = await axios.get("/api/v1/recipe/menu");
  return response.data;
});

export const filterMenus = createAsyncThunk(
  "menu/filterMenus",
  async (category: string) => {
    const response = await axios.get("/api/v1/recipe/menu");
    const result = response.data.menus.filter(
      (menu: any) => menu.categoryId.name === category
    );
    return result;
  }
);

const menu = createSlice({
  name: "menuReducer",
  initialState,
  reducers: {
    SetMenu: (state: any, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
  extraReducers: {
    // 호출 전
    [getMenus.pending.type]: (state: menuState, action) => {
      state.loading = true;
    },

    // 성공
    [getMenus.fulfilled.type]: (state: menuState, action) => {
      state.menus = action.payload.menus;
      state.loading = false;
    },

    // 실패
    [getMenus.rejected.type]: (state: menuState, action) => {
      state.menus = [];
      state.loading = false;
    },

    // 호출 전
    [filterMenus.pending.type]: (state: menuState, action) => {
      state.loading = true;
    },

    // 성공
    [filterMenus.fulfilled.type]: (state: menuState, action) => {
      state.menus = action.payload;
      state.loading = false;
    },

    // 실패
    [filterMenus.rejected.type]: (state: menuState, action) => {
      state.menus = [];
      state.loading = false;
    },
  },
});

export const { SetMenu } = menu.actions;
export default menu;
