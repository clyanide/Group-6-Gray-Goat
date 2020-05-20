export const actionTypes = {
  SET_CURRENT_SONG: "SET_CURRENT_SONG",
};

export const setCurrentSong = (song) => ({
  type: actionTypes.SET_CURRENT_SONG,
  song,
});
