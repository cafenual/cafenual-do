import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface noticeState {
  title: string;
  content: string;
  important: boolean;
}

const initialState: noticeState = {
  title: "",
  content: "",
  important: false,
};

const notice = createSlice({
  name: "noticeReducer",
  initialState,
  reducers: {
    SetNotice: (state: any, action: PayloadAction<any>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { SetNotice } = notice.actions;
export default notice;
