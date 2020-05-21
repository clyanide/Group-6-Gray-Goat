import { actionTypes } from "../actions/MusicPlayer";

const initialState = {
  currentSong: {
    id: 0,
    isPending: false,
    hearts: 0,
    name: "",
    artist: "",
    link: "",
    duration: 0,
    songType: 2, //0 is spotify, 2 is youtube
  },
  currentPlayingPlaylist: {
    id: 0,
    name: "",
    isOwner: false,
    creator: "",
    songs: [],
  },
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.song,
      };

    case actionTypes.SET_CURRENT_PLAYING_PLAYLIST:
      return {
        ...state,
        currentPlayingPlaylist: action.playlist,
      };

    default:
      return state;
  }
};

export default musicPlayerReducer;
