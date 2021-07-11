import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCategories } from "lib/api/category";

export interface categoryState {
  _id?: string;
  name?: string;
  categories?: categoryState[];
  loading?: boolean;
}

const initialState: categoryState = {
  _id: "",
  name: "",
  categories: [],
  loading: false,
};

export const getCategoriesHandle = createAsyncThunk(
  "category/getCategories",
  async () => {
    const categories = await getCategories();
    return categories;
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
    [getCategoriesHandle.pending.type]: (state: categoryState, action) => {
      state.loading = true;
    },

    // 성공
    [getCategoriesHandle.fulfilled.type]: (state: categoryState, action) => {
      state.categories = action.payload;
      state.loading = false;
    },

    // 실패
    [getCategoriesHandle.rejected.type]: (state: categoryState, action) => {
      state.categories = [];
      state.loading = false;
    },
  },
});

export const { EditCategory } = category.actions;
export default category;
