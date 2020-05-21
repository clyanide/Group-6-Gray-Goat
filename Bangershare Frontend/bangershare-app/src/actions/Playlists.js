import {
  postPlaylist,
  getUserPlaylists,
  refreshAccessToken,
  getPlaylistForUsername,
  getPlaylistFromId,
  followUserPlaylist,
  unfollowUserPlaylist,
} from "../utility/API";
import { push } from "connected-react-router";
import { setAccessToken, logoutUser } from "./User";
import { getFriends } from "./Friends";

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
  GET_SINGLE_PLAYLIST_FAIL: "GET_SINGLE_PLAYLIST_FAIL",
  FOLLOW_PLAYLIST: "FOLLOW_PLAYLIST",
  FOLLOW_PLAYLIST_FAIL: "FOLLOW_PLAYLIST_FAIL",
  UNFOLLOW_PLAYLIST: "FOLLOW_PLAYLIST",
  UNFOLLOW_PLAYLIST_FAIL: "FOLLOW_PLAYLIST_FAIL",
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
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res));
              dispatch(getPlaylist());
            })
            .catch(() => {
              dispatch(logoutUser());
            });
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
        dispatch(
          createPlaylistSuccess(res.data, localStorage.getItem("username"))
        );
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res));
              dispatch(createPlaylist(name));
            })
            .catch(() => {
              dispatch(logoutUser());
            });
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
    });
    dispatch(
      push({
        pathname: "/playlist",
        search: "?id=" + playlist.id,
      })
    );
  };
};

const getPlaylistForProfile = (username) => {
  return (dispatch) => {
    dispatch(getPlaylistForProfileStart());
    getPlaylistForUsername(localStorage.getItem("token"), username)
      .then((res) => {
        dispatch(getPlaylistForProfileSucces(res.data));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res));
              dispatch(getPlaylistForProfile(username));
            })
            .catch(() => {
              dispatch(logoutUser());
            });
        } else {
          dispatch(getPlaylistForProfileFail(err.message));
        }
      });
  };
};

const getPlaylistForProfileStart = () => ({
  type: playlistActionType.GET_PROFILE_PLAYLIST,
  fetching: true,
});

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
    dispatch(getSinglePlaylistStart());
    getPlaylistFromId(localStorage.getItem("token"), playlistId)
      .then((res) => {
        dispatch(getSinglePlaylistSuccess(res.data));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res));
              dispatch(getSinglePlaylist(playlistId));
            })
            .catch(() => {
              dispatch(logoutUser());
            });
        } else {
          dispatch(getSinglePlaylistFail(err.message));
        }
      });
  };
};

const getSinglePlaylistStart = () => ({
  type: playlistActionType.GET_SINGLE_PLAYLIST,
  fetching: true,
});

const getSinglePlaylistSuccess = (payload) => ({
  type: playlistActionType.GET_SINGLE_PLAYLIST_SUCCESS,
  fetching: false,
  playlist: payload,
});

const getSinglePlaylistFail = (error) => ({
  type: playlistActionType.GET_SINGLE_PLAYLIST_FAIL,
  error,
});

const followPlaylistHomePage = (playlistId) => {
  return (dispatch) => {
    dispatch(followUserPlaylistStart());
    followUserPlaylist(localStorage.getItem("token"), playlistId)
      .then(() => {
        dispatch(getPlaylist());
        dispatch(getFriends());
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res));
              dispatch(followPlaylistHomePage(playlistId));
            })
            .catch(() => {
              dispatch(logoutUser());
            });
        } else {
          dispatch(followUserPlaylistFail(err.message));
        }
      });
  };
};

const followPlaylistProfilePage = (playlistId, username) => {
  return (dispatch) => {
    dispatch(followUserPlaylistStart());
    followUserPlaylist(localStorage.getItem("token"), playlistId)
      .then(() => {
        dispatch(getPlaylistForProfile(username));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res));
              dispatch(followPlaylistProfilePage(playlistId, username));
            })
            .catch(() => {
              dispatch(logoutUser());
            });
        } else {
          dispatch(followUserPlaylistFail(err.message));
        }
      });
  };
};

const followUserPlaylistStart = () => ({
  type: playlistActionType.FOLLOW_PLAYLIST,
  fetching: true,
});

const followUserPlaylistFail = (error) => ({
  type: playlistActionType.FOLLOW_PLAYLIST_FAIL,
  error,
});

const unfollowPlaylistHomePage = (playlistId) => {
  return (dispatch) => {
    dispatch(unfollowUserPlaylistStart());
    unfollowUserPlaylist(localStorage.getItem("token"), playlistId)
      .then(() => {
        dispatch(getPlaylist());
        dispatch(getFriends());
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res));
              dispatch(unfollowPlaylistHomePage(playlistId));
            })
            .catch(() => {
              dispatch(logoutUser());
            });
        } else {
          dispatch(unfollowUserPlaylistFail(err.message));
        }
      });
  };
};

const unfollowPlaylistProfilePage = (playlistId, username) => {
  return (dispatch) => {
    dispatch(unfollowUserPlaylistStart());
    unfollowUserPlaylist(localStorage.getItem("token"), playlistId)
      .then(() => {
        dispatch(getPlaylistForProfile(username));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          refreshAccessToken(localStorage.getItem("username"))
            .then((res) => {
              dispatch(setAccessToken(res));
              dispatch(unfollowPlaylistProfilePage(playlistId, username));
            })
            .catch(() => {
              dispatch(logoutUser());
            });
        } else {
          dispatch(unfollowUserPlaylistFail(err.message));
        }
      });
  };
};

const unfollowUserPlaylistStart = () => ({
  type: playlistActionType.UNFOLLOW_PLAYLIST,
  fetching: true,
});

const unfollowUserPlaylistFail = (error) => ({
  type: playlistActionType.UNFOLLOW_PLAYLIST_FAIL,
  error,
});

export {
  getPlaylist,
  createPlaylist,
  setCurrentPlaylist,
  getPlaylistForProfile,
  getSinglePlaylist,
  followPlaylistHomePage,
  followPlaylistProfilePage,
  unfollowPlaylistHomePage,
  unfollowPlaylistProfilePage,
};
