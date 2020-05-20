import {
  postPlaylist,
  getUserPlaylists,
  refreshAccessToken,
  getPlaylistForUsername,
  getPlaylistFromId
} from "../utility/API";
import { push } from "connected-react-router";

export const playlistActionType = {
  GET_PLAYLIST: "GET_PLAYLIST",
  GET_PLAYLIST_SUCCESS: "GET_PLAYLIST_SUCCESS",
  GET_PLAYLIST_FAIL: "GET_PLAYLIST_FAIL",
  CREATE_PLAYLIST: "CREATE_PLAYLIST",
  CREATE_PLAYLIST_SUCCESS: "CREATE_PLAYLIST_SUCCESS",
  CREATE_PLAYLIST_FAIL: "CREATE_PLAYLIST_FAIL",
  SET_CURRENT_PLAYLIST: "SET_CURRENT_PLAYLIST",
  GET_PROFILE_PLAYLIST: "GET_PLAYLIST",
  GET_PROFILE_PLAYLIST_SUCCESS: "GET_PROFILE_PLAYLIST_SUCCESS",
  GET_PROFILE_PLAYLIST_FAIL: "GET_PROFILE_PLAYLIST_FAIL",
  GET_SINGLE_PLAYLIST: "GET_SINGLE_PLAYLIST",
  GET_SINGLE_PLAYLIST_SUCCESS: "GET_SINGLE_PLAYLIST_SUCCESS",
  GET_SINGLE_PLAYLIST_FAIL: "GET_SINGLE_PLAYLIST_FAIL"
};

const getPlaylist = () => {
  return (dispatch) => {
    dispatch(getPlaylistStart());
    getUserPlaylists(localStorage.getItem("token"))
      .then((res) => {
        dispatch(getPlaylistSuccess(res));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(localStorage.getItem("username"), getPlaylist));
        } else {
          dispatch(getPlaylistFail(err.message));
        }
      });
  };
};

const getPlaylistStart = () => ({
  type: playlistActionType.GET_PLAYLIST,
  fetching: true,
});

const getPlaylistSuccess = (payload) => ({
  type: playlistActionType.GET_PLAYLIST_SUCCESS,
  fetching: false,
  userPlaylist: payload.data,
});

const getPlaylistFail = (error) => ({
  type: playlistActionType.GET_PLAYLIST_FAIL,
  error,
});

const createPlaylist = (name) => {
  return (dispatch) => {
    dispatch(createPlaylistStart());
    postPlaylist(localStorage.getItem("token"), name)
      .then((res) => {
        dispatch(createPlaylistSuccess(res.data, localStorage.getItem("username")));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(localStorage.getItem("username"), createPlaylist));
        } else {
          dispatch(createPlaylistFail(err.message));
        }
      });
  };
};

const createPlaylistStart = () => ({
  type: playlistActionType.CREATE_PLAYLIST,
  fetching: true,
});

const createPlaylistSuccess = (payload, name) => ({
  type: playlistActionType.CREATE_PLAYLIST_SUCCESS,
  fetching: false,
  userPlaylist: payload,
  name,
});

const createPlaylistFail = (error) => ({
  type: playlistActionType.GET_PLAYLIST_FAIL,
  error,
});

const setCurrentPlaylist = (playlist) => {
  return (dispatch) => {
    dispatch({
      type: playlistActionType.SET_CURRENT_PLAYLIST,
      playlist,
    })
    dispatch(push({
      pathname: "/playlist",
      search: "?id=" + playlist.id
    }))
  }
};

const getPlaylistForProfile = () => {
  return (dispatch, getState) => {
    const state = getState();
    const profileUser = state.userReducer.userProfile;
    getPlaylistForUsername(localStorage.getItem("token"), profileUser)
      .then((res) => {
        dispatch(getPlaylistForProfileSucces(res.data));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(localStorage.getItem("username"), getPlaylistForProfile));
        } else {
          dispatch(getPlaylistForProfileFail(err.message));
        }
      });
  };
};

const getPlaylistForProfileSucces = (payload) => ({
  type: playlistActionType.GET_PROFILE_PLAYLIST_SUCCESS,
  fetching: false,
  profilePlaylist: payload,
});

const getPlaylistForProfileFail = (error) => ({
  type: playlistActionType.GET_PROFILE_PLAYLIST_FAIL,
  error,
});

const getSinglePlaylist = (playlistId) => {
  return (dispatch) => {
    dispatch(getSinglePlaylistStart())
    getPlaylistFromId(localStorage.getItem("token"), playlistId)
      .then((res) => {
        dispatch(getSinglePlaylistSuccess(res.data))
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(localStorage.getItem("username"), getSinglePlaylist));
        } else {
          dispatch(getSinglePlaylistFail(err.message));
        }
      })
  }
}

const getSinglePlaylistStart = () => ({
  type: playlistActionType.GET_SINGLE_PLAYLIST,
  fetching: true
})

const getSinglePlaylistSuccess = (payload) => ({
  type: playlistActionType.GET_SINGLE_PLAYLIST_SUCCESS,
  fetching: false,
  playlist: payload
})

const getSinglePlaylistFail = (error) => ({
  type: playlistActionType.GET_SINGLE_PLAYLIST_FAIL,
  error
})

export {
  getPlaylist,
  createPlaylist,
  setCurrentPlaylist,
  getPlaylistForProfile,
  getSinglePlaylist
};
