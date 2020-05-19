import { actionType } from "../actions/Token";

const initialState = {
  token: "",
};

const spotifyTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_TOKEN:
      return { token: action.spotifyToken };

    default:
      return state;
  }
};

export default spotifyTokenReducer;
