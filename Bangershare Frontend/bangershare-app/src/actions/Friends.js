import { getUserFriends, refreshAccessToken } from "../utility/API";

export const friendActionType = {
  GET_FRIENDS: "GET_FRIENDS",
  GET_FRIENDS_SUCCESS: "GET_FRIENDS_SUCCESS",
  GET_FRIENDS_FAIL: "GET_FRIENDS_FAIL",
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
        }
      });
  };
};

const getFriendsStarted = () => ({
  type: friendActionType.GET_FRIENDS,
});

const getFriendsSuccess = (payload) => ({
  type: friendActionType.GET_FRIENDS_SUCCESS,
  friends: payload.data.friendSongs,
  pendingFriends: payload.data.pendingFriends,
});

const getFriendsFail = (error) => ({
  type: friendActionType.GET_FRIENDS_FAIL,
  error,
});

export { getFriends };
