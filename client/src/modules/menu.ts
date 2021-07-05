import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const menu = createSlice({
  name: "menuReducer",
  initialState,
  reducers: {
    SetMenu: (state: any, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { SetMenu } = menu.actions;
export default menu;
