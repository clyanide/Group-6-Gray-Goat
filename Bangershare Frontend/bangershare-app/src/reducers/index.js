import { combineReducers } from "redux";
import userReducer from "./User";
import friendsReducer from "./Friends";
import bangerShareReducer from "./BangerShare";
import playlistReducer from "./Playlist"
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    friendsReducer,
    bangerShareReducer,
    playlistReducer,
  });

export default createRootReducer;
