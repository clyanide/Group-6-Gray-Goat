import { combineReducers } from "redux";
import ColorReducer from "./Color";
import UserReducer from "./User";
import friendsView from "./friendsView";

const appReducer = combineReducers({
  ColorReducer,
  UserReducer,
  friendsView,
});

const rootReducer = (state, action) => {
  let stateCopy = { ...state };

  return appReducer(stateCopy, action);
};

export default rootReducer;
