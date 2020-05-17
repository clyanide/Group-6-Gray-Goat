import { friendActionType } from "../actions/Friends"

const initialState = {
    friends: [],
    pendingFriends: [],
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case friendActionType.GET_FRIENDS_SUCCESS: {
            return {
                ...state,
                friends: action.friends,
                pendingFriends: action.pendingFriends
            }
        }
        default:
            return { ...state }
    }
}

export default friendsReducer;