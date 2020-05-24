import { playlistActionType } from "./../actions/Playlists";
import { songActionType } from "./../actions/Song";
import { userActionType } from "../actions/User";

const initialState = {
  userPlaylist: [],
  profilePlaylist: [],
  currentPlaylist: {
    id: 0,
    name: "",
    isOwner: false,
    creator: "",
    songs: [],
    following: false,
  },
};

const replaceSong = (song, songList) => {
  const songIndex = songList.findIndex((s) => s.id === song.id);
  songList[songIndex] = song;
  return songList;
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case playlistActionType.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        userPlaylist: action.userPlaylist,
      };
    case playlistActionType.CREATE_PLAYLIST_SUCCESS: {
      let playlist = Object.assign({}, action.userPlaylist);
      playlist = {
        ...playlist,
        creator: localStorage.getItem("username"),
        isOwner: true,
        songs: [],
        following: true,
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
      };
    case songActionType.ADD_SONG_TO_PLAYLIST_SUCCESS: {
      const song = Object.assign({}, action.song);
      return {
        ...state,
        currentPlaylist: {
          ...state.currentPlaylist,
          songs: [...state.currentPlaylist.songs, song],
        },
      };
    }
    case songActionType.UPDATE_PENDING_SONG_SUCCESS: {
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
    case songActionType.DELETE_SONG_SUCCESS: {
      const newSongs = state.currentPlaylist.songs.filter(
        (song) => song.id !== action.song.id
      );
      return {
        ...state,
        currentPlaylist: {
          ...state.currentPlaylist,
          songs: [...newSongs],
        },
      };
    }
    case playlistActionType.GET_PROFILE_PLAYLIST: {
      return {
        ...state,
        profilePlaylist: initialState.profilePlaylist,
      };
    }
    case playlistActionType.GET_PROFILE_PLAYLIST_SUCCESS: {
      return {
        ...state,
        profilePlaylist: action.profilePlaylist,
      };
    }
    case playlistActionType.GET_SINGLE_PLAYLIST_SUCCESS: {
      console.log(action.playlist);
      return {
        ...state,
        currentPlaylist: action.playlist,
      };
    }
    case songActionType.LIKE_SONG_SUCCESS: {
      const songList = replaceSong(action.song, state.currentPlaylist.songs);
      return {
        ...state,
        currentPlaylist: {
          ...state.currentPlaylist,
          songs: songList,
        },
      };
    }
    case songActionType.DELETE_LIKE_SONG_SUCCESS: {
      const songList = replaceSong(action.song, state.currentPlaylist.songs);
      return {
        ...state,
        currentPlaylist: {
          ...state.currentPlaylist,
          songs: songList,
        },
      };
    }
    case userActionType.LOGOUT_USER: {
      return {
        initialState,
      };
    }
    default:
      return { ...state };
  }
};
export default playlistReducer;
