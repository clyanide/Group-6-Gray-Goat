import {
  getUserFriends,
  updateFriendRequest,
  deleteUserFriendRequest,
  postFriendRequest
} from "../utility/API";


export const friendActionType = {
  GET_FRIENDS: "GET_FRIENDS",
  GET_FRIENDS_SUCCESS: "GET_FRIENDS_SUCCESS",
  GET_FRIENDS_FAIL: "GET_FRIENDS_FAIL",
  ACCEPT_PENDING_REQUEST: "ACCEPT_PENDING_REQUEST",
  ACCEPT_PENDING_REQUEST_FAIL: "ACCEPT_PENDING_REQUEST_FAIL",
  DELETE_FRIEND_REQUEST: "DELETE_FRIEND_REQUEST",
  DELETE_FRIEND_REQUEST_FAIL: "DELETE_FRIEND_REQUEST_FAIL",
  ADD_FRIEND: "ADD_FRIEND",
  ADD_FRIEND_SUCCESS: "ADD_FRIEND_SUCCESS",
  ADD_FRIEND_FAIL: "ADD_FRIEND_FAIL"
};

const getFriends = () => {
  return (dispatch) => {
    dispatch(getFriendsStarted());
    getUserFriends(localStorage.getItem("token"))
      .then((res) => {
        dispatch(getFriendsSuccess(res));
      })
      .catch((err) => {
        dispatch(getFriendsFail(err));
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
  sentRequests: payload.data.sentRequests,
  fetching: false,
});

const getFriendsFail = (error) => ({
  type: friendActionType.GET_FRIENDS_FAIL,
  error,
});

const acceptPendingRequest = (otherUsername) => {
  return (dispatch) => {
    dispatch(acceptPendingRequestStart);
    updateFriendRequest(
      localStorage.getItem("token"),
      localStorage.getItem("username"),
      otherUsername
    )
      .then(() => {
        dispatch(getFriends());
      })
      .catch((err) => {
        dispatch(acceptPendingRequestFail(err));
      });
  };
};

const acceptPendingRequestStart = () => ({
  type: friendActionType.ACCEPT_PENDING_REQUEST,
  fetching: true,
});

const acceptPendingRequestFail = (error) => ({
  type: friendActionType.ACCEPT_PENDING_REQUEST_FAIL,
  error,
});

const deleteFriendRequest = (username) => {
  return (dispatch) => {
    dispatch(deleteFriendRequestStart());
    deleteUserFriendRequest(localStorage.getItem("token"), username)
      .then(() => {
        dispatch(getFriends());
      })
      .catch((err) => {
        dispatch(deleteFriendRequestFail(err));
      });
  };
};

const deleteFriendRequestStart = () => ({
  type: friendActionType.DELETE_FRIEND_REQUEST,
  fetching: true,
});

const deleteFriendRequestFail = (error) => ({
  type: friendActionType.DELETE_FRIEND_REQUEST_FAIL,
  error,
});

const addFriend = (username) => {
  return (dispatch) => {
    dispatch(addFriendStart())
    postFriendRequest(localStorage.getItem("token"), username)
      .then(() => {
        dispatch(getFriends())
      })
      .catch((err) => {
        dispatch(addFriendFail(err.message))
      })
  }
}

const addFriendStart = () => ({
  type: friendActionType.ADD_FRIEND,
  fetching: true
})

const addFriendFail = (error) => ({
  type: friendActionType.ADD_FRIEND_FAIL,
  error
})
export { getFriends, acceptPendingRequest, deleteFriendRequest, addFriend };
