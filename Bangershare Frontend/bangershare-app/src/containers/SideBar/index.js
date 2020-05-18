import { connect } from "react-redux";
import AppSideBar from "../../components/SideBar";
import { push } from "connected-react-router";
import { setCurrentPlaylist } from "../../actions/Playlists";

const mapStateToProps = (state) => ({
  userPlaylists: state.playlistReducer.userPlaylist,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPlaylist: (playlist) => {
    dispatch(setCurrentPlaylist(playlist));
  },
  push: (url) => {
    dispatch(push(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSideBar);
