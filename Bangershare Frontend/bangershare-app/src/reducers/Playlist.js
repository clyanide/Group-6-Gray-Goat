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
        case playlistActionType.CREATE_PLAYLIST_SUCCESS: {
            return {
                ...state,
                userPlaylist: [...state.userPlaylist, action.createdPlaylist]
            }
        }
        default:
            return { ...state }
    }
}

export default playlistReducer;