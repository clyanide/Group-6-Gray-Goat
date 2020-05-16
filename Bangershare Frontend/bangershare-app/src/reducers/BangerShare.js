import { actionType } from "../actions/User";

const initialState = {
    isLoading: false
}
const setIsLoading = (boolean, state) => {
    console.log(boolean)
    return { isLoading: boolean, ...state }
}

const bangerShareReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOGIN_USER: {
            return setIsLoading(true, state)
        }
        case actionType.LOGIN_USER_SUCCESS: {
            return setIsLoading(false, state)
        }
        case actionType.LOGIN_USER_FAIL: {
            return setIsLoading(false, state)
        }
        case actionType.REGISTER_USER: {
            return setIsLoading(true, state)
        }
        case actionType.REGISTER_USER_SUCCESS: {
            return setIsLoading(false, state)
        }
        case actionType.REGISTER_USER_FAIL: {
            return setIsLoading(false, state)
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default bangerShareReducer;