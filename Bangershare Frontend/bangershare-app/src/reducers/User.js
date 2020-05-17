import { actionType } from "../actions/User";

const initialState = {
  currentUser: "",
  error: "",
  accessToken: "",
  fetching: false,
  userInfo: {
    username: "",
    password: "",
    email: "",
  },
};
const setUserDetail = (state, action) => {
  return {
    ...state,
    currentUser: action.username,
    accessToken: action.accessToken,
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
        userInfo: action.userInfo,
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
        userInfo: action.userInfo,
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
