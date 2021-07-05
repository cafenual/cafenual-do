import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface commentState {
  _id?: string;
  content?: string;
  writer?: string;
  menu?: string;
  comments?: commentState[];
}

const initialState: commentState = {
  _id: "",
  content: "",
  writer: "",
  menu: "",
  comments: [],
};

export const getComments = createAsyncThunk(
  "comment/getComments",
  async (menuId: string) => {
    const response = await axios.get(`/api/v1/recipe/comment/${menuId}`);
    return response.data;
  }
);

const comment = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    SetComment: (state: commentState, action: PayloadAction<commentState>) => {
      const { content, writer, menu } = action.payload;
      state.content = content;
      state.writer = writer;
      state.menu = menu;
    },
  },

  extraReducers: {
    // 성공
    [getComments.fulfilled.type]: (state: commentState, action) => {
      state.comments = action.payload.comments;
    },
  },
});

export const { SetComment } = comment.actions;
export default comment;
