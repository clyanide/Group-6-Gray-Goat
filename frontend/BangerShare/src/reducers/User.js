import { actionType } from "../actions/User"

const initialState = {
    currentUser: "",
    error: "",
    accessToken: "",
    userInfo: {
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
                userInfo: action.userInfo
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
        case actionType.LOGIN_USER: {
            return {
                ...state,
                userInfo: action.userInfo
            }
        }
        default:
            return { ...state }
    }
}

export default userReducer