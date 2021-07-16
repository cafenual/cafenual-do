import { combineReducers, configureStore } from "@reduxjs/toolkit";
import category, { categoryState } from "./category";
import menu, { menuState } from "./menu";
import notice, { noticeState } from "./notice";
import user, { userState } from "./users";

export interface reduxStoreState {
  user: userState;
  category: categoryState;
  menu: menuState;
  notice: noticeState;
}

const rootReducer = combineReducers({
  user: user.reducer,
  category: category.reducer,
  menu: menu.reducer,
  notice: notice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
