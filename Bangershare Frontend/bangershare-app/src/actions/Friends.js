import { getUserFriends, refreshAccessToken } from "../utility/API";

export const friendActionType = {
  GET_FRIENDS: "GET_FRIENDS",
  GET_FRIENDS_SUCCESS: "GET_FRIENDS_SUCCESS",
  GET_FRIENDS_FAIL: "GET_FRIENDS_FAIL",
  ACCEPT_PENDING_REQUEST: "ACCEPT_PENDING_REQUEST",
  ACCEPT_PENDING_REQUEST_SUCCESS: "ACCEPT_PENDING_REQUEST_SUCCESS",
  ACCEPT_PENDING_REQUEST_FAIL: "ACCEPT_PENDING_REQUEST_FAIL"
};

const getFriends = () => {
  return (dispatch, getState) => {
    dispatch(getFriendsStarted());
    const state = getState();
    const user = state.userReducer.currentUser;
    getUserFriends(user.accessToken)
      .then((res) => {
        dispatch(getFriendsSuccess(res));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(user, getFriends, getFriendsFail));
        } else {
          dispatch(getFriendsFail(err));
        }
      });
  };
};

const getFriendsStarted = () => ({
  type: friendActionType.GET_FRIENDS,
  fetching: true,
});

const getFriendsSuccess = (payload) => ({
  type: friendActionType.GET_FRIENDS_SUCCESS,
  friends: payload.data.friendSongs,
  pendingFriends: payload.data.pendingFriends,
  fetching: false,
});

const getFriendsFail = (error) => ({
  type: friendActionType.GET_FRIENDS_FAIL,
  error,
});

const acceptPendingRequest = (senderName) => {
  return (dispatch, getState) => {
    dispatch(acceptPendingRequestStart);
  }
}

const acceptPendingRequestStart = () => ({
  type: friendActionType.ACCEPT_PENDING_REQUEST,
  fetching: true,
})

const acceptPendingRequestSuccess = (payload) => ({
  type: friendActionType.ACCEPT_PENDING_REQUEST_SUCCESS,
  fetching: false,

})

const acceptPendingRequestFail = (error) => ({
  type: friendActionType.ACCEPT_PENDING_REQUEST_FAIL,
  error
})
export { getFriends };
