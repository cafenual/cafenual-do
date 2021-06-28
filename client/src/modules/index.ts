import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user, { userState } from "./users";

export interface reduxStoreState {
    user : userState;
}

const rootReducer = combineReducers({
    user: user.reducer,
})


const store = configureStore({
    reducer: rootReducer,
})

export default store