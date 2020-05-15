import { combineReducers } from "redux";
import ColorReducer from "./Color";
import UserReducer from "./User"

const appReducer = combineReducers({
  ColorReducer, UserReducer
});

const rootReducer = (state, action) => {
  let stateCopy = { ...state };

  return appReducer(stateCopy, action);
};

export default rootReducer;
