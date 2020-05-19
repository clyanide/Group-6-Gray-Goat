import { connect } from "react-redux";
import AppSideBar from "../../components/SideBar";
import { push } from "connected-react-router";
import { setCurrentPlaylist } from "../../actions/Playlists";
import { setUserProfile } from "../../actions/User"

const mapStateToProps = (state) => ({
  userPlaylists: state.playlistReducer.userPlaylist,
  user: state.userReducer.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPlaylist: (playlist) => {
    dispatch(setCurrentPlaylist(playlist));
  },
  push: (url) => {
    dispatch(push(url));
  },
  setProfileUser: (username) => { dispatch(setUserProfile(username)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSideBar);
