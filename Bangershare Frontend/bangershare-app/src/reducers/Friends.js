import { friendActionType } from "../actions/Friends";
import { userActionType } from "../actions/User";

const initialState = {
  friends: [],
  pendingFriends: [],
  sentRequests: [],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case friendActionType.GET_FRIENDS_SUCCESS: {
      return {
        ...state,
        friends: action.friends,
        pendingFriends: action.pendingFriends,
        sentRequests: action.sentRequests,
      };
    }
    case userActionType.LOGOUT_USER: {
      return {
        initialState,
      };
    }
    default:
      return { ...state };
  }
};

export default friendsReducer;
