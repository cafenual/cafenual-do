import { combineReducers } from "redux";
import user from "_reducers/user_reducer";

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
