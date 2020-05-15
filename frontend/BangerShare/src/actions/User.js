export const actionType = {
    REGISTER_USER: "REGISTER_USER",
    REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
    REGISTER_USER_FAIL: "REGISTER_USER_FAIL"
}

const registerUser = (signUpInfo) => ({
    type: actionType.REGISTER_USER,
    signUpInfo
})

export { registerUser }