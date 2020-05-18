import { connect } from "react-redux";
import PlaylistPage from "../../components/PlaylistPage";

const mapStateToProps = (state) => ({
  currentPlaylist: state.playlistReducer.currentPlaylist,
  isFetching: state.bangerShareReducer.fetching,
});

export default connect(mapStateToProps)(PlaylistPage);
