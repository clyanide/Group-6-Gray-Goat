import { userActionType } from "../actions/User";

const initialState = {
  fetching: false,
  error: "",
};

const setLoading = (state, boolean) => {
  return { ...state, fetching: boolean };
};

const setError = (state, action) => {
  return {
    ...state,
    fetching: false,
    error: action.error,
  };
};

// central app management reducedr used for loading and error checking
const bangerShareReducer = (state = initialState, action) => {
  if (action.fetching === true) {
    return setLoading(state, true);
  } else if (action.error) {
    return setError(state, action);
  } else if (action.fetching === false) {
    return setLoading(state, false);
  } else if (action.type === userActionType.LOGOUT_USER) {
    return {
      initialState,
    };
  }

  return { ...state };
};

export default bangerShareReducer;
