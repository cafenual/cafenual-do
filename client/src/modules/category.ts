import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface categoryState {
  _id?: string;
  name?: string;
  category?: categoryState[];
  loading?: boolean;
}

const initialState: categoryState = {
  _id: "",
  name: "",
  category: [],
  loading: false,
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const response = await axios.get("/api/v1/recipe/category");
    return response.data;
  }
);

const category = createSlice({
  name: "categoryReducer",
  initialState,
  reducers: {
    EditCategory: (
      state: categoryState,
      action: PayloadAction<categoryState>
    ) => {
      const { _id, name } = action.payload;
      state._id = _id;
      state.name = name;
    },
  },
  extraReducers: {
    // 호출 전
    [getCategories.pending.type]: (state: categoryState, action) => {
      state.loading = true;
    },

    // 성공
    [getCategories.fulfilled.type]: (state: categoryState, action) => {
      state.category = action.payload.categories;
      state.loading = false;
    },

    // 실패
    [getCategories.rejected.type]: (state: categoryState, action) => {
      state.category = [];
      state.loading = false;
    },
  },
});

export const { EditCategory } = category.actions;
export default category;
