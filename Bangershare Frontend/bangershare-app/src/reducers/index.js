import { combineReducers } from "redux";
import userReducer from "./User";
import friendsReducer from "./Friends";
import bangerShareReducer from "./BangerShare";
import spotifyTokenReducer from "./SpotifyToken";
import playlistReducer from "./Playlist";
import { connectRouter } from "connected-react-router";
import musicPlayerReducer from "./MusicPlayer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    friendsReducer,
    bangerShareReducer,
    spotifyTokenReducer,
    playlistReducer,
    musicPlayerReducer,
  });

export default createRootReducer;
