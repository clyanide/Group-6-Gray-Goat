import {
  postSpotifySongToPlaylist,
  postYoutubeSongToPlaylist,
  updateSong,
  deleteSong,
  refreshAccessToken,
} from "../utility/API";

import { getYoutubeVideoID, getSpotifyTrackId } from "../utility/InputParser";

export const songActionType = {
  ADD_SONG_TO_PLAYLIST: "ADD_SONG_TO_PLAYLIST",
  ADD_SONG_TO_PLAYLIST_SUCCESS: "ADD_SONG_TO_PLAYLIST_SUCCESS",
  ADD_SONG_TO_PLAYLIST_FAIL: "ADD_SONG_TO_PLAYLIST_FAIL",
  UPDATE_PENDING_SONG: "UPDATE_PENDING_SONG",
  UPDATE_PENDING_SONG_SUCCESS: "UPDATE_PENDING_SONG_SUCCESS",
  UPDATE_PENDING_SONG_FAIL: "UPDATE_PENDING_SONG_FAIL",
  DELETE_SONG: "DELETE_SONG",
  DELETE_SONG_SUCCESS: "DELETE_SONG_SUCCESS",
  DELETE_SONG_FAIL: "DELETE_SONG_FAIL",
  GET_PROFILE_PLAYLIST: "GET_PLAYLIST",
};

const addSongToPlaylist = (song) => {
  return (dispatch, getState) => {
    dispatch(addSongToPlaylistStart());
    const state = getState();
    const playlistId = state.playlistReducer.currentPlaylist.id;
    if (song.songType === 0) {
      var spotifyId = getSpotifyTrackId(song.link);
      postSpotifySongToPlaylist(
        localStorage.getItem("token"),
        spotifyId,
        playlistId
      )
        .then((res) => {
          dispatch(addSongToPlaylistSuccess(res.data));
        })
        .catch((err) => {
          if (err.response.status === 401) {
            dispatch(refreshAccessToken(localStorage.getItem("username"), addSongToPlaylist));
          } else {
            dispatch(addSongToPlaylistFail(err.message));
          }
        });
    } else {
      const youtubeId = getYoutubeVideoID(song.link);
      postYoutubeSongToPlaylist(
        localStorage.getItem("token"),
        song,
        playlistId,
        youtubeId
      )
        .then((res) => {
          dispatch(addSongToPlaylistSuccess(res.data));
        })
        .catch((err) => {
          if (err.response.status === 401) {
            dispatch(
              refreshAccessToken(
                localStorage.getItem("username"),
                addSongToPlaylist,
                addSongToPlaylistFail
              )
            );
          } else {
            dispatch(addSongToPlaylistFail(err.message));
          }
        });
    }
  };
};

const addSongToPlaylistStart = () => ({
  type: songActionType.ADD_SONG_TO_PLAYLIST,
  fetching: true,
});

const addSongToPlaylistSuccess = (payload) => ({
  type: songActionType.ADD_SONG_TO_PLAYLIST_SUCCESS,
  fetching: false,
  song: payload,
});

const addSongToPlaylistFail = (error) => ({
  type: songActionType.ADD_SONG_TO_PLAYLIST_FAIL,
  error,
});

const updatePendingSong = (song) => {
  return (dispatch) => {
    dispatch(updatePendingSongStart());
    updateSong(localStorage.getItem("token"), song)
      .then((res) => {
        dispatch(updatePendingSongSuccess(res.data));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(localStorage.getItem("username"), updatePendingSong));
        } else {
          dispatch(updatePendingSongFail(err.message));
        }
      });
  };
};

const updatePendingSongStart = () => ({
  type: songActionType.UPDATE_PENDING_SONG,
  fetching: true,
});

const updatePendingSongSuccess = (payload) => ({
  type: songActionType.UPDATE_PENDING_SONG_SUCCESS,
  fetching: false,
  song: payload,
});

const updatePendingSongFail = (error) => ({
  type: songActionType.UPDATE_PENDING_SONG_FAIL,
  error,
});

const deleteSongFromPlaylist = (song) => {
  return (dispatch, getState) => {
    dispatch(deleteSongFromPlaylistStart());
    const state = getState();
    const playlistId = state.playlistReducer.currentPlaylist.id;
    deleteSong(localStorage.getItem("token"), song, playlistId)
      .then((res) => {
        dispatch(deleteSongFromPlaylistSuccess(res.data));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(localStorage.getItem("username"), deleteSongFromPlaylist));
        } else {
          dispatch(deleteSongFromPlaylistFail(err.message));
        }
      });
  };
};

const deleteSongFromPlaylistStart = () => ({
  type: songActionType.DELETE_SONG,
  fetching: true,
});

const deleteSongFromPlaylistSuccess = (payload) => ({
  type: songActionType.DELETE_SONG_SUCCESS,
  fetching: false,
  song: payload,
});

const deleteSongFromPlaylistFail = (error) => ({
  type: songActionType.DELETE_SONG_FAIL,
  error,
});

export { addSongToPlaylist, updatePendingSong, deleteSongFromPlaylist };
