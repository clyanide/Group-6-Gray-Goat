import {
  postSpotifySongToPlaylist,
  postYoutubeSongToPlaylist,
  updateSong,
  deleteSong,
  postLikeSong,
  getUserLikeSong,
  deleteLikeSong,
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
  LIKE_SONG: "LIKE_SONG",
  LIKE_SONG_SUCCESS: "LIKE_SONG_SUCCESS",
  LIKE_SONG_FAIL: "LIKE_SONG_FAIL",
  GET_LIKE_SONG: "GET_LIKE_SONG",
  GET_LIKE_SONG_SUCCESS: "GET_LIKE_SONG_SUCCESS",
  GET_LIKE_SONG_FAIL: "GET_LIKE_SONG_FAIL",
  DELETE_LIKE_SONG: "DELETE_LIKE_SONG",
  DELETE_LIKE_SONG_SUCCESS: "DELETE_LIKE_SONG_SUCCESS",
  DELETE_LIKE_SONG_FAIL: "DELETE_LIKE_SONG_FAIL",
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
          dispatch(addSongToPlaylistFail(err.message));
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
          dispatch(addSongToPlaylistFail(err.message));
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
        dispatch(updatePendingSongFail(err.message));
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
        dispatch(deleteSongFromPlaylistFail(err.message));
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

const likeSong = (songId) => {
  return (dispatch) => {
    dispatch(likeSongStart());
    postLikeSong(localStorage.getItem("token"), songId)
      .then((res) => {
        dispatch(likeSongSuccess(res.data));
      })
      .catch((err) => {
        dispatch(likeSongFail(err.message));
      });
  };
};

const likeSongStart = () => ({
  type: songActionType.LIKE_SONG,
  fetching: true,
});

const likeSongSuccess = (payload) => ({
  type: songActionType.LIKE_SONG_SUCCESS,
  fetching: false,
  song: payload,
});

const likeSongFail = (error) => ({
  type: songActionType.LIKE_SONG_FAIL,
  error,
});

const getLikeSong = () => {
  return (dispatch) => {
    dispatch(getLikeSongStart());
    getUserLikeSong(localStorage.getItem("token"))
      .then((res) => {
        dispatch(getLikeSongSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getLikeSongFail(err.message));
      });
  };
};

const getLikeSongStart = () => ({
  type: songActionType.GET_LIKE_SONG,
  fetching: true,
});

const getLikeSongSuccess = (payload) => ({
  type: songActionType.GET_LIKE_SONG_SUCCESS,
  fetching: false,
  likedSongs: payload,
});

const getLikeSongFail = (error) => ({
  type: songActionType.GET_LIKE_SONG_FAIL,
  error,
});

const removeLikeFromSong = (songId) => {
  return (dispatch) => {
    dispatch(removeLikeFromSongStart());
    deleteLikeSong(localStorage.getItem("token"), songId)
      .then((res) => {
        dispatch(removeLikeFromSongSuccess(res.data));
      })
      .catch((err) => {
        dispatch(removeLikeFromSongFail(err.message));
      });
  };
};

const removeLikeFromSongStart = () => ({
  type: songActionType.DELETE_LIKE_SONG,
  fetching: true,
});

const removeLikeFromSongSuccess = (payload) => ({
  type: songActionType.DELETE_LIKE_SONG_SUCCESS,
  fetching: false,
  song: payload,
});

const removeLikeFromSongFail = (error) => ({
  type: songActionType.DELETE_LIKE_SONG_FAIL,
  error,
});

export {
  addSongToPlaylist,
  updatePendingSong,
  deleteSongFromPlaylist,
  likeSong,
  getLikeSong,
  removeLikeFromSong,
};
