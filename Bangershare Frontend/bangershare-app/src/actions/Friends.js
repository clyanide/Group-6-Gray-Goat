import {
  getUserFriends,
  updateFriendRequest,
  deleteUserFriendRequest,
  refreshAccessToken,
} from "../utility/API";

export const friendActionType = {
  GET_FRIENDS: "GET_FRIENDS",
  GET_FRIENDS_SUCCESS: "GET_FRIENDS_SUCCESS",
  GET_FRIENDS_FAIL: "GET_FRIENDS_FAIL",
  ACCEPT_PENDING_REQUEST: "ACCEPT_PENDING_REQUEST",
  ACCEPT_PENDING_REQUEST_FAIL: "ACCEPT_PENDING_REQUEST_FAIL",
  DELETE_FRIEND_REQUEST: "DELETE_FRIEND_REQUEST",
  DELETE_FRIEND_REQUEST_FAIL: "DELETE_FRIEND_REQUEST_FAIL",
};

const getFriends = () => {
  return (dispatch) => {
    dispatch(getFriendsStarted());
    getUserFriends(localStorage.getItem("token"))
      .then((res) => {
        dispatch(getFriendsSuccess(res));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(localStorage.getItem("username"), getFriends));
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
  return (dispatch) => {
    dispatch(acceptPendingRequestStart);
    updateFriendRequest(localStorage.getItem("token"), localStorage.getItem("username"), otherUsername)
      .then(() => {
        dispatch(getFriends());
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(localStorage.getItem("username"), acceptPendingRequest));
        } else {
          dispatch(acceptPendingRequestFail(err));
        }
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
        if (err.response.status === 401) {
          dispatch(
            refreshAccessToken(
              localStorage.getItem("username"),
              deleteFriendRequest,
              deleteFriendRequestFail
            )
          );
        } else {
          dispatch(deleteFriendRequestFail(err));
        }
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

export { getFriends, acceptPendingRequest, deleteFriendRequest };
