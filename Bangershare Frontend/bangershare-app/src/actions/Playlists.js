import {
  postPlaylist,
  getUserPlaylists,
  refreshAccessToken,
  getPlaylistForUsername,
} from "../utility/API";

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
};

const getPlaylist = () => {
  return (dispatch, getState) => {
    dispatch(getPlaylistStart());
    getUserPlaylists(localStorage.getItem("token"))
      .then((res) => {
        dispatch(getPlaylistSuccess(res));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          const store = getState();
          const user = store.userReducer.currentUser
          dispatch(refreshAccessToken(user.name, getPlaylist));
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
  return (dispatch, getState) => {
    dispatch(createPlaylistStart());
    const state = getState();
    const user = state.userReducer.currentUser;
    postPlaylist(localStorage.getItem("token"), name)
      .then((res) => {
        dispatch(createPlaylistSuccess(res.data, user.name));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          dispatch(refreshAccessToken(user.name, createPlaylist));
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

const setCurrentPlaylist = (playlist) => ({
  type: playlistActionType.SET_CURRENT_PLAYLIST,
  playlist,
});

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
          const user = state.userReducer.currentUser;
          dispatch(refreshAccessToken(
            user.name,
            getPlaylistForProfile,
          ));
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

export {
  getPlaylist,
  createPlaylist,
  setCurrentPlaylist,
  getPlaylistForProfile,
};
