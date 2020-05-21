import { userActionType } from "../actions/User";
import { songActionType } from "../actions/Song";

const initialState = {
  currentUser: {
    name: "",
  },
  userProfile: "",
  likedSongs: []
};

const setUserDetail = (state, action) => {
  localStorage.setItem("token", action.accessToken);
  localStorage.setItem("refreshToken", action.refreshToken);
  localStorage.setItem("username", action.username);

  return {
    ...state,
    currentUser: {
      name: action.username,
    },
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.REGISTER_USER_SUCCESS: {
      return setUserDetail(state, action);
    }
    case userActionType.LOGIN_USER_SUCCESS: {
      return setUserDetail(state, action);
    }
    case userActionType.SET_ACCESS_TOKEN: {
      localStorage.setItem("token", action.accessToken);
      return {
        ...state,
      };
    }
    case userActionType.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.username,
      };
    case userActionType.GET_USER_SUCCESS: {
      return {
        ...state,
        currentUser: {
          name: action.username,
        },
      };
    }
    case userActionType.LOGOUT_USER: {
      return {
        initialState,
      };
    }
    case userActionType.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: {
          name: action.username,
        },
      };
    }
    case songActionType.LIKE_SONG_SUCCESS: {
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.song]
      }
    }
    case songActionType.GET_LIKE_SONG_SUCCESS: {
      return {
        ...state,
        likedSongs: action.likedSongs
      }
    }
    default:
      return { ...state };
  }
};

export default userReducer;
