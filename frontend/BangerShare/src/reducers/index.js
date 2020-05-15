import { combineReducers } from "redux";
import ColorReducer from "./Color";

const appReducer = combineReducers({
  ColorReducer,
});

const rootReducer = (state, action) => {
  let stateCopy = { ...state };

  return appReducer(stateCopy, action);
};

export default rootReducer;
