import { connect } from "react-redux";
import CreateSongList from "../../../components/PlaylistPage/SongsList/CreateSongList";
import {
  setCurrentSong,
  setCurrentPlayingPlaylist,
} from "../../../actions/MusicPlayer";

const mapStateToProps = (state) => {
  return {
    currentPlaylist: state.playlistReducer.currentPlaylist,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleSongClick: (song) => {
    dispatch(setCurrentSong(song));
  },
  handleCurrentPlayingPlaylist: (playlist) => {
    dispatch(setCurrentPlayingPlaylist(playlist));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateSongList);
