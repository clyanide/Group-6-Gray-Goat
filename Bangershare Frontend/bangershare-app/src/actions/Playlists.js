import { getUserPlaylists, refreshAccessToken } from "../utility/API"

export const playlistActionType = {
    GET_PLAYLIST: "GET_PLAYLIST",
    GET_PLAYLIST_SUCCESS: "GET_PLAYLIST_SUCCESS",
    GET_PLAYLIST_FAIL: "GET_PLAYLIST_FAIL"
}

const getPlaylist = () => {
    return (dispatch, getState) => {
        dispatch(getPlaylistStart());
        const store = getState();
        const user = store.userReducer.currentUser
        getUserPlaylists(user.accessToken)
            .then((res) => {
                console.log(res)
                dispatch(getPlaylistSuccess(res))
            }).catch((err) => {
                if (err.response.status === 401) {
                    refreshAccessToken(user, getPlaylist, getPlaylistFail)
                }
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

export { getPlaylist }