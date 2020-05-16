import { combineReducers } from "redux";
import userReducer from "./User";
import bangerShareReducer from "./BangerShare";

const appReducer = combineReducers({ userReducer, bangerShareReducer });

const rootReducer = (state, action) => {
  let stateCopy = { ...state };

  return appReducer(stateCopy, action);
};

export default rootReducer;
