import { playlistActionType } from "./../actions/Playlists";

const initialState = {
    userPlaylist: [],
    currentPlaylist: {
        id: 0,
        name: "",
        isOwner: false,
        creator: "",
        songs: [],
    },
};

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case playlistActionType.GET_PLAYLIST_SUCCESS:
            return {
                ...state,
                userPlaylist: action.userPlaylist,
            };
        case playlistActionType.CREATE_PLAYLIST_SUCCESS: {
            const playlist = {
                id: action.userPlaylist.id,
                name: action.userPlaylist.name,
                isOwner: true,
                creator: action.name,
                songs: [],
            };
            return {
                ...state,
                userPlaylist: [...state.userPlaylist, playlist],
            };
        }
        case playlistActionType.SET_CURRENT_PLAYLIST:
            return {
                ...state,
                currentPlaylist: action.playlist,
            }
        default:
            return { ...state };
    }
};

export default playlistReducer;
