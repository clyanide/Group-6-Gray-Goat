import { userActionType } from "../actions/User";

const initialState = {
  currentUser: {
    name: "",
    accessToken: "",
    refreshToken: "",
  },
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
    default:
      return { ...state };
  }
};

export default userReducer;
