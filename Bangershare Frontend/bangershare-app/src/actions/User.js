import { push } from "connected-react-router";
import {
  login,
  register,
  revokeToken,
  getUser,
  getUsers,
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
  GET_ALL_USERS: "GET_ALL_USERS",
  GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
  GET_ALL_USERS_FAIL: "GET_ALL_USERS_FAIL",
};

const registerUser = ({ username, email, password }) => {
  return (dispatch) => {
    dispatch(registerUserStart());
    register(email, username, password)
      .then(() => {
        login(username, password).then((res) => {
          dispatch(registerUserSuccess(res, username));
          dispatch(push("/spotifyauth"));
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
        dispatch(push("/spotifyauth"));
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
        .catch((err) => {
          console.log(err);
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
        window.location.reload();
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
    });
    dispatch(
      push({
        pathname: "/profile",
        search: "?username=" + username,
      })
    );
  };
};

const setCurrentUser = (username) => ({
  type: userActionType.SET_CURRENT_USER,
  username,
});

const getAllUsers = () => {
  return (dispatch) => {
    dispatch(getAllUsersStart());
    getUsers(localStorage.getItem("token"))
      .then((res) => {
        dispatch(getAllUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAllUsersFail(err.message));
      });
  };
};

const getAllUsersStart = () => ({
  type: userActionType.GET_ALL_USERS,
  fetching: true,
});

const getAllUsersSuccess = (payload) => ({
  type: userActionType.GET_ALL_USERS_SUCCESS,
  fetching: false,
  users: payload,
});

const getAllUsersFail = (error) => ({
  type: userActionType.GET_ALL_USERS_FAIL,
  error,
});

export {
  registerUser,
  loginUser,
  setAccessToken,
  setUserProfile,
  logoutUser,
  getUserInfo,
  setCurrentUser,
  getAllUsers,
};
