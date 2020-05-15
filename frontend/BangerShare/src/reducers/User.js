import { actionType } from "../actions/User"

const initialState = {
    currentUser: "",
    error: "",
    accessToken: "",
    loginInfo: {
        username: "",
        password: ""
    },
    signUpInfo: {
        username: "",
        password: "",
        email: ""
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REGISTER_USER: {
            return {
                ...state,
                signUpInfo: action.signUpInfo
            }
        }
        case actionType.REGISTER_USER_SUCCESS: {
            return {
                ...state,
                currentUser: action.username
            }
        }
        case actionType.REGISTER_USER_FAIL: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return { ...state }
    }
}

export default userReducer