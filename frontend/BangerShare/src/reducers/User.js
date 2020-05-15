import { actionType } from "../actions/User"

const initialState = {
    currentUser: "",
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
        default:
            return { ...state }
    }
}

export default userReducer