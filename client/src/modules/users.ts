import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  email: string;
  name: string;
  role: string;
  status: string;
  token: string;
  wage: number;
  _id: string;
}

const initialState: userState = {
  email: "",
  name: "",
  role: "",
  status: "",
  token: "",
  wage: 0,
  _id: "",
};

const user = createSlice({
  // createSlice는  액션생성함수 , 리듀서를 둘다 만들어줌
  name: "userReducer",
  initialState,
  reducers: {
    SetUser: (state: userState, action: PayloadAction<userState>) => {
      const { email, name, role, status, token, wage, _id } = action.payload;
      state.email = email;
      state.name = name;
      state.role = role;
      state.status = status;
      state.token = token;
      state.wage = wage;
      state._id = _id;
    },
  },
});

export const { SetUser } = user.actions;

export default user;
