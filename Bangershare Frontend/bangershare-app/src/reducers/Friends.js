import { actionType } from "../actions/Friends"

const initialState = {
    friends: [],
    pendingFriends: [],
    fetching: false,
    error: ""
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_FRIENDS:
            return {
                ...state,
                fetching: true,
            }
        case actionType.GET_FRIENDS_SUCCESS: {
            return {
                ...state,
                fetching: false,
                friends: action.friends,
                pendingFriends: action.pendingFriends
            }
        }
        case actionType.GET_FRIENDS_FAIL: {
            return {
                ...state,
                fetching: false,
            }
        }
        default:
            return { ...state }
    }
}

export default friendsReducer;