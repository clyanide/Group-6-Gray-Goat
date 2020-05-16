import { combineReducers } from "redux";
import userReducer from "./User"

const appReducer = combineReducers({ userReducer });

const rootReducer = (state, action) => {
  let stateCopy = { ...state };

  return appReducer(stateCopy, action);
};

export default rootReducer;
