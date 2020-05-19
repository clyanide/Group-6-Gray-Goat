import { playlistActionType } from "./../actions/Playlists";

const initialState = {
  userPlaylist: [],
  profilePlaylist: [],
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
      const playlist = Object.assign({}, action.userPlaylist);
      return {
        ...state,
        userPlaylist: [...state.userPlaylist, playlist],
      };
    }
    case playlistActionType.SET_CURRENT_PLAYLIST:
      return {
        ...state,
        currentPlaylist: action.playlist,
      };
    case playlistActionType.ADD_SONG_TO_PLAYLIST_SUCCESS: {
      const song = Object.assign({}, action.song);
      return {
        ...state,
        currentPlaylist: {
          ...state.currentPlaylist,
          songs: [...state.currentPlaylist.songs, song],
        },
      };
    }
    case playlistActionType.UPDATE_PENDING_SONG_SUCCESS: {
      const updatedSong = Object.assign({}, action.song);
      const newSongs = state.currentPlaylist.songs.filter((song) => {
        return song.id !== updatedSong.id;
      });
      return {
        ...state,
        currentPlaylist: {
          ...state.currentPlaylist,
          songs: [...newSongs, updatedSong],
        },
      };
    }
    case playlistActionType.DELETE_SONG_SUCCESS: {
      const newSongs = state.currentPlaylist.songs.filter((song) => {
        return song.id !== action.song.id;
      });
      return {
        ...state,
        currentPlaylist: {
          ...state.currentPlaylist,
          songs: [...newSongs],
        },
      };
    }
    case playlistActionType.GET_PROFILE_PLAYLIST_SUCCESS: {
      return {
        ...state,
        profilePlaylist: action.profilePlaylist
      }
    }
    default:
      return { ...state };
  }
};

export default playlistReducer;
