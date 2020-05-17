export const playlistActionType = {
    GET_PLAYLIST: "GET_PLAYLIST",
    GET_PLAYLIST_SUCCESS: "GET_PLAYLIST_SUCCESS",
    GET_PLAYLIST_FAIL: "GET_PLAYLIST_FAIL"
}

const getPlaylist = () => {
    return (dispatch, getState) => {
        dispatch(getPlaylistStart);
        const store = getState();
        console.log(store)
    }
}

const getPlaylistStart = () => ({
    type: playlistActionType.GET_PLAYLIST,
    fetching: true,
})

const getPlaylistSuccess = (payload) => ({
    type: playlistActionType.GET_PLAYLIST_SUCCESS,
    fetching: false,
})

const getPlaylistFail = (error) => ({
    type: playlistActionType.GET_PLAYLIST_FAIL,
    error
})

export { getPlaylist }