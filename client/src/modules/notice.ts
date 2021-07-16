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

    SetNoticeData: (state: noticeState, action: PayloadAction<noticeState>) => {
      const { title, content, important } = action.payload;
      state.title = title;
      state.content = content;
      state.important = important;
    },
  },
});

export const { SetNotice, SetNoticeData } = notice.actions;
export default notice;
