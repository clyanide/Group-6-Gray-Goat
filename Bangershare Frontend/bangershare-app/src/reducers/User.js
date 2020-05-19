import { userActionType } from "../actions/User";

const initialState = {
  currentUser: {
    name: "",
    accessToken: "",
    refreshToken: "",
  },
  userProfile: ""
};

const setUserDetail = (state, action) => {
  return {
    ...state,
    currentUser: {
      name: action.username,
      accessToken: action.accessToken,
      refreshToken: action.refreshToken,
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
      return {
        ...state,
        accessToken: action.accessToken,
      };
    }
    case userActionType.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.username
      }
    default:
      return { ...state };
  }
};

export default userReducer;
