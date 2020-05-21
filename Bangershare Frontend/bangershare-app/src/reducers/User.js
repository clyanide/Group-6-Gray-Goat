import { userActionType } from "../actions/User";

const initialState = {
  currentUser: {
    name: "",
  },
  userProfile: "",
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
      console.log(action);
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
    default:
      return { ...state };
  }
};

export default userReducer;
