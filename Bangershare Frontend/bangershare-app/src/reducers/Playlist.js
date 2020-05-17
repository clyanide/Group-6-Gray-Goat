import { playlistActionType } from "./../actions/Playlists"

const initialState = {
    userPlaylist: [],
    friendsPlaylist: [],
    currentPlaylist: {
        id: 0,
        name: "",
        isOwner: false,
        creator: "",
        songs: []
    }
}

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case playlistActionType.GET_PLAYLIST_SUCCESS:
            return {
                ...state,
                userPlaylist: action.userPlaylist
            }
        default:
            return { ...state }
    }
}

export default playlistReducer;