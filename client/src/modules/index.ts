import { combineReducers, configureStore } from "@reduxjs/toolkit";
import category, { categoryState } from "./category";
import user, { userState } from "./users";

export interface reduxStoreState {
  user: userState;
  category: categoryState;
}

const rootReducer = combineReducers({
  user: user.reducer,
  category: category.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
