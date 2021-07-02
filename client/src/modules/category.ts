import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface categoryState {
  _id: string;
  name: string;
}

const initialState: categoryState = {
  _id: "",
  name: "",
};

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
});

export const { EditCategory } = category.actions;
export default category;
