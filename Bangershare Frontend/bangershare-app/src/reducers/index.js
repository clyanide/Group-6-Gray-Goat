import { combineReducers } from "redux";
import userReducer from "./User";
import friendsReducer from './Friends';
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  userReducer,
  friendsReducer
});

export default createRootReducer;
