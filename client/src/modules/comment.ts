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

const comment = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    SetComment: (state: commentState, action: PayloadAction<commentState>) => {
      const { content } = action.payload;
      state.content = content;
    },
  },
});

export const { SetComment } = comment.actions;
export default comment;
