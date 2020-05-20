import { push } from "connected-react-router";
import { login, register, revokeToken } from "../utility/API";

export const userActionType = {
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAIL: "REGISTER_USER_FAIL",
  LOGIN_USER: "LOGIN_USER",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL: "LOGIN_USER_FAIL",
  SET_ACCESS_TOKEN: "SET_ACCESS_TOKEN",
  SET_USER_PROFILE: "SET_USER_PROFILE",
  LOGOUT_USER: "LOGUT_USER"
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

const logoutUser = () => {
  return (dispatch) => {
    revokeToken(localStorage.getItem("token"))
    dispatch(push("/login"));

    return {
      type: userActionType.LOGOUT_USER
    }
  }
}

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

const setUserProfile = (username) => ({
  type: userActionType.SET_USER_PROFILE,
  fetching: true,
  username,
});

export { registerUser, loginUser, setAccessToken, setUserProfile, logoutUser };
