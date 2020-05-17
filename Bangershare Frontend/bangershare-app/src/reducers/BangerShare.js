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

const bangerShareReducer = (state = initialState, action) => {
  if (action.fetching === true) {
    return setLoading(state, true);
  } else if (action.error) {
    return setError(state, action);
  } else if (action.fetching === false) {
    return setLoading(state, false);
  }

  return { ...state };
};

export default bangerShareReducer;
