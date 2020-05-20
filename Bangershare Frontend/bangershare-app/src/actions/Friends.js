import { getUserFriends, updateFriendRequest, deleteUserFriendRequest, refreshAccessToken } from "../utility/API";

export const friendActionType = {
  GET_FRIENDS: "GET_FRIENDS",
  GET_FRIENDS_SUCCESS: "GET_FRIENDS_SUCCESS",
  GET_FRIENDS_FAIL: "GET_FRIENDS_FAIL",
  ACCEPT_PENDING_REQUEST: "ACCEPT_PENDING_REQUEST",
  ACCEPT_PENDING_REQUEST_FAIL: "ACCEPT_PENDING_REQUEST_FAIL",
  DELETE_FRIEND_REQUEST: "DELETE_FRIEND_REQUEST",
  DELETE_FRIEND_REQUEST_FAIL: "DELETE_FRIEND_REQUEST_FAIL"
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

const acceptPendingRequest = (otherUsername) => {
  return (dispatch, getState) => {
    dispatch(acceptPendingRequestStart);
    const state = getState();
    const user = state.userReducer.currentUser;
    updateFriendRequest(user.accessToken, user.name, otherUsername)
      .then(() => {
        dispatch(getFriends())
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(user, acceptPendingRequest, acceptPendingRequestFail));
        } else {
          dispatch(acceptPendingRequestFail(err));
        }
      })
  }
}

const acceptPendingRequestStart = () => ({
  type: friendActionType.ACCEPT_PENDING_REQUEST,
  fetching: true,
})

const acceptPendingRequestFail = (error) => ({
  type: friendActionType.ACCEPT_PENDING_REQUEST_FAIL,
  error
})

const deleteFriendRequest = (username) => {
  return (dispatch, getState) => {
    dispatch(deleteFriendRequestStart())
    const state = getState();
    const user = state.userReducer.currentUser;
    deleteUserFriendRequest(user.accessToken, username)
      .then((res) => {
        dispatch(getFriends())
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(user, deleteFriendRequest, deleteFriendRequestFail));
        } else {
          dispatch(deleteFriendRequestFail(err));
        }
      })
  }
}

const deleteFriendRequestStart = () => ({
  type: friendActionType.DELETE_FRIEND_REQUEST,
  fetching: true
})

const deleteFriendRequestFail = (error) => ({
  type: friendActionType.DELETE_FRIEND_REQUEST_FAIL,
  error
})

export { getFriends, acceptPendingRequest, deleteFriendRequest };
