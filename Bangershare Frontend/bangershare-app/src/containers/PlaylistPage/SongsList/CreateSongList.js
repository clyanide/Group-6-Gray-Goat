import { connect } from "react-redux";
import CreateSongList from "../../../components/PlaylistPage/SongsList/CreateSongList";
import {
  setCurrentSong,
  setCurrentPlayingPlaylist,
} from "../../../actions/MusicPlayer";
import { likeSong, removeLikeFromSong } from "../../../actions/Song";

const mapStateToProps = (state) => {
  return {
    currentPlaylist: state.playlistReducer.currentPlaylist,
    likedSongs: state.userReducer.likedSongs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleSongClick: (song) => {
    dispatch(setCurrentSong(song));
  },
  handleCurrentPlayingPlaylist: (playlist) => {
    dispatch(setCurrentPlayingPlaylist(playlist));
  },
  likeSong: (songId) => {
    dispatch(likeSong(songId));
  },
  unlikeSong: (songId) => {
    dispatch(removeLikeFromSong(songId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSongList);
