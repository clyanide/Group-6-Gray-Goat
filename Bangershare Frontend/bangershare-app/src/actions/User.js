export const actionType = {
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAIL: "REGISTER_USER_FAIL",
  LOGIN_USER: "LOGIN_USER",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL: "LOGIN_USER_FAIL",
};

const registerUser = (userInfo) => ({
  type: actionType.REGISTER_USER,
  userInfo,
});

const loginUser = (userInfo) => {
  return {
    type: actionType.LOGIN_USER,
    userInfo,
  }
};

export { registerUser, loginUser };
