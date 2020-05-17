import { combineReducers } from "redux";
import userReducer from "./User";
import bangerShareReducer from "./BangerShare";
import spotifyTokenReducer from "./SpotifyToken";

const appReducer = combineReducers({
  userReducer,
  bangerShareReducer,
  spotifyTokenReducer,
});

const rootReducer = (state, action) => {
  let stateCopy = { ...state };

  return appReducer(stateCopy, action);
};

export default rootReducer;
