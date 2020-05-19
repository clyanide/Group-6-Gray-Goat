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
    const user = state.userReducer.currentUser;
    const playlistId = state.playlistReducer.currentPlaylist.id;
    if (song.songType === 0) {
      var spotifyId = getSpotifyTrackId(song.link);
      postSpotifySongToPlaylist(user.accessToken, spotifyId, playlistId)
        .then((res) => {
          dispatch(addSongToPlaylistSuccess(res.data));
        })
        .catch((err) => {
          if (err.response.status === 401) {
            refreshAccessToken(user, addSongToPlaylist, addSongToPlaylistFail);
          } else {
            dispatch(addSongToPlaylistFail(err.message));
          }
        });
    } else {
      const youtubeId = getYoutubeVideoID(song.link);
      postYoutubeSongToPlaylist(user.accessToken, song, playlistId, youtubeId)
        .then((res) => {
          dispatch(addSongToPlaylistSuccess(res.data));
        })
        .catch((err) => {
          if (err.response.status === 401) {
            refreshAccessToken(user, addSongToPlaylist, addSongToPlaylistFail);
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
  return (dispatch, getState) => {
    dispatch(updatePendingSongStart());
    const state = getState();
    const user = state.userReducer.currentUser;
    updateSong(user.accessToken, song)
      .then((res) => {
        dispatch(updatePendingSongSuccess(res.data));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(user, updatePendingSong, updatePendingSongFail);
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
    const user = state.userReducer.currentUser;
    const playlistId = state.playlistReducer.currentPlaylist.id;
    deleteSong(user.accessToken, song, playlistId)
      .then((res) => {
        dispatch(deleteSongFromPlaylistSuccess(res.data));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(
            user,
            deleteSongFromPlaylist,
            deleteSongFromPlaylistFail
          );
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
