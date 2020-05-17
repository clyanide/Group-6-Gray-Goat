import { friendActionType } from "./../actions/Friends"
import { userActionType } from "./../actions/User"

const initialState = {
    fetching: false,
    error: ""
}

const setLoading = (state, boolean) => {
    return { ...state, fetching: boolean }
}

const setError = (state, action) => {
    return {
        ...state,
        fetching: true,
        error: action.err
    }
}
const bangerShareReducer = (state = initialState, action) => {
    switch (action.type) {
        case friendActionType.GET_FRIENDS:
            return setLoading(state, true);
        case friendActionType.GET_FRIENDS_SUCCESS:
            return setLoading(state, false);
        case friendActionType.GET_FRIENDS_FAIL:
            return setError(state, action);
        case userActionType.REGISTER_USER:
            return setLoading(state, true)
        case userActionType.REGISTER_USER_SUCCESS:
            return setLoading(state, false)
        case userActionType.REGISTER_USER_FAIL:
            return setError(state, action)
        case userActionType.LOGIN_USER:
            return setLoading(state, true);
        case userActionType.LOGIN_USER_SUCCESS:
            return setLoading(state, false)
        case userActionType.LOGIN_USER_FAIL:
            return setLoading(state, false)
        default: return { ...state }
    }
}

export default bangerShareReducer;