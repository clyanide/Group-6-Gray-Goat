import { actionTypes } from "../actions/MusicPlayer";

const initialState = {
  songType: "youtube",
  songUri: "spotify:track:7BsKwPYQu8PQIEy3CCfPVJ",
  songLink: "https://www.youtube.com/watch?v=MfiuQupcQxU",
  songDuration: "266000",
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TYPE:
      return {
        ...state,
        songType: action.songType,
      };

    case actionTypes.SET_URI:
      return {
        ...state,
        songUri: action.songUri,
      };

    case actionTypes.SET_LINK:
      return {
        ...state,
        songLink: action.songLink,
      };

    case actionTypes.SET_DURATION:
      return { ...state, songDuration: action.songDuration };

    default:
      return state;
  }
};

export default musicPlayerReducer;
