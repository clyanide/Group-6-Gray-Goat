import { actionType } from "../actions/FriendsHeader";

const friendsView = (state = { view: true }, action) => {
  switch (action.type) {
    case actionType.TOGGLE_VIEW:
      return { view: !state.view };

    default:
      return state;
  }
};

export default friendsView;
