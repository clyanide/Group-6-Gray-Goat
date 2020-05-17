import { getUserFriends } from "../utility/API";

export const actionType = {
    GET_FRIENDS: "GET_FRIENDS",
    GET_FRIENDS_SUCCESS: "GET_FRIENDS_SUCCESS",
    GET_FRIENDS_FAIL: "GET_FRIENDS_FAIL"
}

const getFriends = () => {
    return (dispatch, getState) => {
        dispatch(getFriendsStarted())
        const state = getState();
        const user = state.userReducer.currentUser;
        getUserFriends(user.accessToken)
            .then(res => {
                dispatch(getFriendsSuccess(res))
            })
            .catch(err => {
                if (err.response.status === 401) {
                    console.log(err.response.status)
                }
            })
    }
}

const getFriendsStarted = () => ({
    type: actionType.GET_FRIENDS
})

const getFriendsSuccess = (payload) => ({
    type: actionType.GET_FRIENDS_SUCCESS,
    friends: payload.data.friendSongs,
    pendingFriends: payload.data.pendingFriends
})

export { getFriends }