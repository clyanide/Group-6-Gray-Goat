import { postPlaylist, getUserPlaylists, refreshAccessToken } from "../utility/API"

export const playlistActionType = {
    GET_PLAYLIST: "GET_PLAYLIST",
    GET_PLAYLIST_SUCCESS: "GET_PLAYLIST_SUCCESS",
    GET_PLAYLIST_FAIL: "GET_PLAYLIST_FAIL",
    CREATE_PLAYLIST: "CREATE_PLAYLIST",
    CREATE_PLAYLIST_SUCCESS: "CREATE_PLAYLIST_SUCCESS",
    CREATE_PLAYLIST_FAIL: "CREATE_PLAYLIST_FAIL"
}

const getPlaylist = () => {
    return (dispatch, getState) => {
        dispatch(getPlaylistStart());
        const store = getState();
        const user = store.userReducer.currentUser;
        getUserPlaylists(user.accessToken)
            .then((res) => {
                dispatch(getPlaylistSuccess(res))
            }).catch((err) => {
                if (err.response.status === 401) {
                    refreshAccessToken(user, getPlaylist, getPlaylistFail)
                }
            })
    }
}

const createPlaylist = (name) => {
    return (dispatch, getState) => {
        dispatch(createPlaylistStart())
        const state = getState();
        const user = state.userReducer.currentUser;
        postPlaylist(user.accessToken, name)
            .then((res) => {
                console.log(res)
                dispatch(createPlaylistSuccess())
            }).catch((err) => {
                refreshAccessToken(user, createPlaylist, createPlaylistFail)
            })
    }
}

const getPlaylistStart = () => ({
    type: playlistActionType.GET_PLAYLIST,
    fetching: true,
})

const getPlaylistSuccess = (payload) => ({
    type: playlistActionType.GET_PLAYLIST_SUCCESS,
    fetching: false,
    userPlaylist: payload.data,
})

const getPlaylistFail = (error) => ({
    type: playlistActionType.GET_PLAYLIST_FAIL,
    error
})

const createPlaylistStart = () => ({
    type: playlistActionType.CREATE_PLAYLIST,
    fetching: true
})

const createPlaylistSuccess = (payload) => ({
    type: playlistActionType.CREATE_PLAYLIST_SUCCESS,
    fetching: false,

})

const createPlaylistFail = (error) => ({
    type: playlistActionType.GET_PLAYLIST_FAIL,
    error
})

export { getPlaylist, createPlaylist }