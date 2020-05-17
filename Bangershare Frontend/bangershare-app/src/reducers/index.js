import { combineReducers } from "redux";
import userReducer from "./User";
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  userReducer
});

export default createRootReducer;
