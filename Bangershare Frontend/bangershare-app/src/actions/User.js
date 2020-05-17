import { push } from 'connected-react-router'
import { login, register } from "../utility/API"

export const actionType = {
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAIL: "REGISTER_USER_FAIL",
  LOGIN_USER: "LOGIN_USER",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL: "LOGIN_USER_FAIL",
};

const registerUser = ({ username, email, password }) => {
  return dispatch => {
    dispatch(registerUserStart());
    register(email, username, password)
      .then(() => {
        login(username, password).then(res => {
          dispatch(registerUserSuccess(res, username))
          dispatch(push("/home"));
        })
      })
      .catch(err => {
        dispatch(registerUserFail(err.message));
      });
  };
};

const loginUser = ({ username, password }) => {
  return dispatch => {
    dispatch(loginUserStart())
    login(username, password)
      .then(res => {
        dispatch(loginUserSuccess(res, username))
        dispatch(push("/home"));
      })
      .catch(err => {
        dispatch(loginUserFail(err))
      })
  }
}


const registerUserStart = () => ({
  type: actionType.REGISTER_USER,
});

const registerUserSuccess = (payload, username) => ({
  type: actionType.REGISTER_USER_SUCCESS,
  accessToken: payload.data.accessToken,
  refreshToken: payload.data.refreshToken,
  username
});

const registerUserFail = (error) => ({
  type: actionType.REGISTER_USER_FAIL,
  error
});

const loginUserStart = () => ({
  type: actionType.LOGIN_USER,
});

const loginUserSuccess = (payload, username) => ({
  type: actionType.LOGIN_USER_SUCCESS,
  accessToken: payload.data.accessToken,
  refreshToken: payload.data.refreshToken,
  username
});

const loginUserFail = (error) => ({
  type: actionType.LOGIN_USER_FAIL,
  error
});

export { registerUser, loginUser };
