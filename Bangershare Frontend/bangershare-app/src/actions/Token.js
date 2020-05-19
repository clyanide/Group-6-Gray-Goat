export const actionType = {
  SET_TOKEN: "SET_TOKEN",
};

export const setToken = (token) => ({
  type: actionType.SET_TOKEN,
  spotifyToken: token,
});
