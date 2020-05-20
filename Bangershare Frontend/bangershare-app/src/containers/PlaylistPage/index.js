import { connect } from "react-redux";
import PlaylistPage from "../../components/PlaylistPage";
import { getSinglePlaylist } from "../../actions/Playlists";

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlistReducer.currentPlaylist,
  isFetching: state.bangerShareReducer.fetching,
  search: state.router.location.search,
});

const mapDispatchToProps = (dispatch) => ({
  getPlaylist: (playlistId) => {
    dispatch(getSinglePlaylist(playlistId));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);
