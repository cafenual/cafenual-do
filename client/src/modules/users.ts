import { createSlice } from "@reduxjs/toolkit";


interface userState  {
    userId: number,

}

const user = createSlice({
    // createSlice는  액션생성함수 , 리듀서를 둘다 만들어줌
    name: "userReducer",
    initialState: [],
    reducers: {
        loginUser: (state: userState[], action) => {
            state.push({
                userId: action.payload,
              });
        }
    }
})

export const { loginUser } = user.actions;

export default user;