import ProfilePage from "../../components/ProfilePage";
import { connect } from "react-redux";
import {
  getPlaylistForProfile,
  setCurrentPlaylist,
} from "../../actions/Playlists";
import { push } from "connected-react-router";

const mapStateToProps = (state) => ({
  profilePlaylist: state.playlistReducer.profilePlaylist,
  user: state.userReducer.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  getProfilePlaylist: () => {
    dispatch(getPlaylistForProfile());
  },
  setCurrentPlaylist: (playlist) => {
    dispatch(setCurrentPlaylist(playlist));
  },
  push: (url) => {
    dispatch(push(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
