import { combineReducers, configureStore } from "@reduxjs/toolkit";
import category, { categoryState } from "./category";
import comment, { commentState } from "./comment";
import menu, { menuState } from "./menu";
import user, { userState } from "./users";

export interface reduxStoreState {
  user: userState;
  category: categoryState;
  menu: menuState;
  comment: commentState;
}

const rootReducer = combineReducers({
  user: user.reducer,
  category: category.reducer,
  menu: menu.reducer,
  comment: comment.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
