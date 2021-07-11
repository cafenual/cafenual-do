import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMenuDetail, getMenus } from "lib/api/menu";

export interface menuState {
  _id?: string;
  name?: string;
  description?: string;
  categoryId?: string;
  recipe?: string;
  image?: string;
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
  image: "",
  loading: false,
};

export const getMenusHandle = createAsyncThunk("menu/getMenus", async () => {
  const menus = await getMenus();
  return menus;
});

export const filterMenusHandle = createAsyncThunk(
  "menu/filterMenus",
  async (category: string) => {
    const menus = await getMenus();
    const result = menus.filter(
      (menu: any) => menu.categoryId.name === category
    );
    return result;
  }
);

export const getMenuDetailHandle = createAsyncThunk(
  "menu/getMenuDetail",
  async (menuId: string) => {
    const menu = await getMenuDetail(menuId);
    return menu;
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
    [getMenusHandle.pending.type]: (state: menuState, action) => {
      state.loading = true;
    },

    // 성공
    [getMenusHandle.fulfilled.type]: (state: menuState, action) => {
      state.menus = action.payload;
      state.loading = false;
    },

    // 실패
    [getMenusHandle.rejected.type]: (state: menuState, action) => {
      state.menus = [];
      state.loading = false;
    },

    // 호출 전
    [filterMenusHandle.pending.type]: (state: menuState, action) => {
      state.loading = true;
    },

    // 성공
    [filterMenusHandle.fulfilled.type]: (state: menuState, action) => {
      state.menus = action.payload;
      state.loading = false;
    },

    // 실패
    [filterMenusHandle.rejected.type]: (state: menuState, action) => {
      state.menus = [];
      state.loading = false;
    },

    // 호출 전
    [getMenuDetailHandle.pending.type]: (state: menuState, action) => {
      state.loading = true;
    },

    // 성공
    [getMenuDetailHandle.fulfilled.type]: (state: menuState, action) => {
      const { _id, name, description, image, recipe } = action.payload.menu;
      state._id = _id;
      state.name = name;
      state.description = description;
      state.image = image;
      state.recipe = recipe;
      state.loading = false;
    },

    // 실패
    [getMenuDetailHandle.rejected.type]: (state: menuState, action) => {
      state.loading = false;
    },
  },
});

export const { SetMenu } = menu.actions;
export default menu;
