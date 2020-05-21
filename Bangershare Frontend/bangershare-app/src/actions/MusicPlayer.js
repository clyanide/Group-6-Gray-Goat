export const actionTypes = {
  SET_CURRENT_SONG: "SET_CURRENT_SONG",
  SET_CURRENT_PLAYING_PLAYLIST: " SET_CURRENT_PLAYING_PLAYLIST",
};

export const setCurrentSong = (song) => ({
  type: actionTypes.SET_CURRENT_SONG,
  song,
});

export const setCurrentPlayingPlaylist = (playlist) => ({
  type: actionTypes.SET_CURRENT_PLAYING_PLAYLIST,
  playlist,
});
