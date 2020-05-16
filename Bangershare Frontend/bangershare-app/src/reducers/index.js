import { combineReducers } from "redux";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  let stateCopy = { ...state };

  return appReducer(stateCopy, action);
};

export default rootReducer;
