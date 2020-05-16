import { actionType } from "../actions/User";

const initialState = {
  currentUser: "",
  error: "",
  accessToken: "",
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
  };
};

const setError = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REGISTER_USER: {
      return {
        ...state,
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
