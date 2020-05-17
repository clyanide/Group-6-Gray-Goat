import { actionType } from "../actions/User";

const initialState = {
  currentUser: {
    name: "",
    accessToken: "",
    refreshToken: ""
  },
  error: "",
  fetching: false,
};

const setUserDetail = (state, action) => {
  return {
    ...state,
    currentUser: {
      name: action.username,
      accessToken: action.accessToken,
      refreshToken: action.refreshToken
    },
    fetching: false
  };
};

const setError = (state, action) => {
  return {
    ...state,
    error: action.error,
    fetching: false
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REGISTER_USER: {
      return {
        ...state,
        fetching: true,
      };
    }
    case actionType.REGISTER_USER_SUCCESS: {
      return setUserDetail(state, action);
    }
    case actionType.REGISTER_USER_FAIL: {
      return setError(state, action);
    }
    case actionType.LOGIN_USER: {
      return {
        ...state,
        fetching: true,
      };
    }
    case actionType.LOGIN_USER_SUCCESS: {
      return setUserDetail(state, action);
    }
    case actionType.LOGIN_USER_FAIL: {
      return setError(state, action);
    }
    default:
      return { ...state };
  }
};

export default userReducer;
