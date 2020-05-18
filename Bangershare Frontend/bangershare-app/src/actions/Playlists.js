import {
    postPlaylist,
    getUserPlaylists,
    refreshAccessToken,
    postSongToPlaylist,
    updateSong,
    deleteSong,
} from "../utility/API";

export const playlistActionType = {
    GET_PLAYLIST: "GET_PLAYLIST",
    GET_PLAYLIST_SUCCESS: "GET_PLAYLIST_SUCCESS",
    GET_PLAYLIST_FAIL: "GET_PLAYLIST_FAIL",
    CREATE_PLAYLIST: "CREATE_PLAYLIST",
    CREATE_PLAYLIST_SUCCESS: "CREATE_PLAYLIST_SUCCESS",
    CREATE_PLAYLIST_FAIL: "CREATE_PLAYLIST_FAIL",
    SET_CURRENT_PLAYLIST: "SET_CURRENT_PLAYLIST",
    ADD_SONG_TO_PLAYLIST: "ADD_SONG_TO_PLAYLIST",
    ADD_SONG_TO_PLAYLIST_SUCCESS: "ADD_SONG_TO_PLAYLIST_SUCCESS",
    ADD_SONG_TO_PLAYLIST_FAIL: "ADD_SONG_TO_PLAYLIST_FAIL",
    UPDATE_PENDING_SONG: "UPDATE_PENDING_SONG",
    UPDATE_PENDING_SONG_SUCCESS: "UPDATE_PENDING_SONG_SUCCESS",
    UPDATE_PENDING_SONG_FAIL: "UPDATE_PENDING_SONG_FAIL",
    DELETE_SONG: "DELETE_SONG",
    DELETE_SONG_SUCCESS: "DELETE_SONG_SUCCESS",
    DELETE_SONG_FAIL: "DELETE_SONG_FAIL"
};

const getPlaylist = () => {
    return (dispatch, getState) => {
        dispatch(getPlaylistStart());
        const store = getState();
        const user = store.userReducer.currentUser;
        getUserPlaylists(user.accessToken)
            .then((res) => {
                dispatch(getPlaylistSuccess(res));
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    refreshAccessToken(user, getPlaylist, getPlaylistFail);
                } else {
                    dispatch(getPlaylistFail(err))
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
        postPlaylist(user.accessToken, name)
            .then((res) => {
                dispatch(createPlaylistSuccess(res.data, user.name));
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    refreshAccessToken(user, createPlaylist, createPlaylistFail);
                } else {
                    dispatch(createPlaylistFail(err))
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

const addSongToPlaylist = (song) => {
    return (dispatch, getState) => {
        dispatch(addSongToPlaylistStart())
        const state = getState();
        const user = state.userReducer.currentUser;
        const playlistId = state.playlistReducer.currentPlaylist.id
        postSongToPlaylist(user.accessToken, song, playlistId)
            .then((res) => {
                dispatch(addSongToPlaylistSuccess(res.data))
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    refreshAccessToken(user, addSongToPlaylist, addSongToPlaylistFail)
                } else {
                    dispatch(addSongToPlaylistFail(err))
                }
            })
    }
}

const addSongToPlaylistStart = () => ({
    type: playlistActionType.ADD_SONG_TO_PLAYLIST,
    fetching: true
})

const addSongToPlaylistSuccess = (payload) => ({
    type: playlistActionType.ADD_SONG_TO_PLAYLIST_SUCCESS,
    fetching: false,
    song: payload
})

const addSongToPlaylistFail = (error) => ({
    type: playlistActionType.ADD_SONG_TO_PLAYLIST_FAIL,
    error,
})

const updatePendingSong = (song) => {
    return (dispatch, getState) => {
        dispatch(updatePendingSongStart())
        const state = getState();
        const user = state.userReducer.currentUser;
        updateSong(user.accessToken, song)
            .then((res) => {
                dispatch(updatePendingSongSuccess(res.data))
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    refreshAccessToken(user, updatePendingSong, updatePendingSongFail)
                } else {
                    dispatch(updatePendingSongFail(err))
                }
            })
    }
}

const updatePendingSongStart = () => ({
    type: playlistActionType.UPDATE_PENDING_SONG,
    fetching: true
})

const updatePendingSongSuccess = (payload) => ({
    type: playlistActionType.UPDATE_PENDING_SONG_SUCCESS,
    fetching: false,
    song: payload
})

const updatePendingSongFail = (error) => ({
    type: playlistActionType.UPDATE_PENDING_SONG_FAIL,
    error
})

const deleteSongFromPlaylist = (song) => {
    return (dispatch, getState) => {
        dispatch(deleteSongFromPlaylistStart());
        const state = getState();
        const user = state.userReducer.currentUser;
        const playlistId = state.playlistReducer.currentPlaylist.id
        deleteSong(user.accessToken, song, playlistId)
            .then((res) => {
                console.log(res)
                dispatch(deleteSongFromPlaylistSuccess(res.data))
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    refreshAccessToken(user, deleteSongFromPlaylist, deleteSongFromPlaylistFail)
                } else {
                    dispatch(deleteSongFromPlaylistFail(err))
                }
            })
    }
}

const deleteSongFromPlaylistStart = () => ({
    type: playlistActionType.DELETE_SONG,
    fetching: true
})

const deleteSongFromPlaylistSuccess = (payload) => ({
    type: playlistActionType.DELETE_SONG_SUCCESS,
    fetching: false,
    song: payload
})

const deleteSongFromPlaylistFail = (error) => ({
    type: playlistActionType.DELETE_SONG_FAIL,
    error
})

const setCurrentPlaylist = (playlist) => ({
    type: playlistActionType.SET_CURRENT_PLAYLIST,
    playlist,
})

export { getPlaylist, createPlaylist, setCurrentPlaylist, addSongToPlaylist, updatePendingSong, deleteSongFromPlaylist };
