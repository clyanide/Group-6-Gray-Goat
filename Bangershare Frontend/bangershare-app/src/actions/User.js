import { push } from "connected-react-router";
import {
  login,
  register,
  revokeToken,
  getUser,
  refreshAccessToken,
} from "../utility/API";

export const userActionType = {
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAIL: "REGISTER_USER_FAIL",
  LOGIN_USER: "LOGIN_USER",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL: "LOGIN_USER_FAIL",
  SET_ACCESS_TOKEN: "SET_ACCESS_TOKEN",
  SET_USER_PROFILE: "SET_USER_PROFILE",
  LOGOUT_USER: "LOGUT_USER",
  GET_USER: "GET_USER",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const registerUser = ({ username, email, password }) => {
  return (dispatch) => {
    dispatch(registerUserStart());
    register(email, username, password)
      .then(() => {
        login(username, password).then((res) => {
          dispatch(registerUserSuccess(res, username));
          dispatch(push("/home"));
        });
      })
      .catch((err) => {
        dispatch(registerUserFail(err.message));
      });
  };
};

const loginUser = ({ username, password }) => {
  return (dispatch) => {
    dispatch(loginUserStart());
    login(username, password)
      .then((res) => {
        dispatch(loginUserSuccess(res, username));
        dispatch(push("/home"));
      })
      .catch((err) => {
        dispatch(loginUserFail(err.message));
      });
  };
};

const getUserInfo = () => {
  return (dispatch) => {
    if (localStorage.getItem("token")) {
      dispatch(getUserInfoStart());
      getUser(localStorage.getItem("token"))
        .then((res) => {
          dispatch(getUserInfoSuccess(res.data));
        })
        .catch(() => {
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res))
              dispatch(getUserInfo())
            })
            .catch(() => {
              dispatch(logoutUser());
            })
        });
    }
  };
};

const getUserInfoStart = () => ({
  type: userActionType.GET_USER,
  fetching: true,
});

const getUserInfoSuccess = (payload) => ({
  type: userActionType.GET_USER_SUCCESS,
  username: payload.username,
  fetching: false,
});

const logoutUser = () => {
  return (dispatch) => {
    revokeToken(localStorage.getItem("token"))
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("username");
      })
      .then(() => {
        dispatch(push("/login"));
      });
  };
};

const registerUserStart = () => ({
  type: userActionType.REGISTER_USER,
  fetching: true,
});

const registerUserSuccess = (payload, username) => ({
  type: userActionType.REGISTER_USER_SUCCESS,
  accessToken: payload.data.accessToken,
  refreshToken: payload.data.refreshToken,
  username,
  fetching: false,
});

const registerUserFail = (error) => ({
  type: userActionType.REGISTER_USER_FAIL,
  error,
});

const loginUserStart = () => ({
  type: userActionType.LOGIN_USER,
  fetching: true,
});

const loginUserSuccess = (payload, username) => ({
  type: userActionType.LOGIN_USER_SUCCESS,
  accessToken: payload.data.accessToken,
  refreshToken: payload.data.refreshToken,
  username,
  fetching: false,
});

const loginUserFail = (error) => ({
  type: userActionType.LOGIN_USER_FAIL,
  error,
});

const setAccessToken = (payload) => ({
  type: userActionType.SET_ACCESS_TOKEN,
  accessToken: payload.data.accessToken,
});

const setUserProfile = (username) => {
  return (dispatch) => {
    dispatch({
      type: userActionType.SET_USER_PROFILE,
      fetching: true,
      username,
    })
    dispatch(push({
      pathname: "/profile",
      search: "?username=" + username
    }))
  }
};

const setCurrentUser = (username) => ({
  type: userActionType.SET_CURRENT_USER,
  username,
});

export {
  registerUser,
  loginUser,
  setAccessToken,
  setUserProfile,
  logoutUser,
  getUserInfo,
  setCurrentUser,
};
