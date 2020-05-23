import { connect } from "react-redux";
import PlaylistPage from "../../components/PlaylistPage";
import { getSinglePlaylist } from "../../actions/Playlists";
import {
  setCurrentPlayingPlaylist,
  setCurrentSong,
} from "../../actions/MusicPlayer";

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlistReducer.currentPlaylist,
  isFetching: state.bangerShareReducer.fetching,
  search: state.router.location.search,
});

const mapDispatchToProps = (dispatch) => ({
  getPlaylist: (playlistId) => {
    dispatch(getSinglePlaylist(playlistId));
  },
  setCurrentPlayingPlaylist: (playlist) => {
    dispatch(setCurrentPlayingPlaylist(playlist));
  },
  setCurrentSong: (song) => {
    dispatch(setCurrentSong(song));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);
