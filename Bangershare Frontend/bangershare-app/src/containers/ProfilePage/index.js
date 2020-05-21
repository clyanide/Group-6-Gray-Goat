import ProfilePage from "../../components/ProfilePage";
import { connect } from "react-redux";
import {
  getPlaylistForProfile,
  setCurrentPlaylist,
  followPlaylistProfilePage,
  unfollowPlaylistProfilePage,
} from "../../actions/Playlists";
import { push } from "connected-react-router";

const mapStateToProps = (state) => ({
  profilePlaylist: state.playlistReducer.profilePlaylist,
  user: state.userReducer.userProfile,
  search: state.router.location.search,
  isFetching: state.bangerShareReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getProfilePlaylist: (username) => {
    dispatch(getPlaylistForProfile(username));
  },
  setCurrentPlaylist: (playlist) => {
    dispatch(setCurrentPlaylist(playlist));
  },
  push: (url) => {
    dispatch(push(url));
  },
  followPlaylist: (playlistId, username) => {
    dispatch(followPlaylistProfilePage(playlistId, username));
  },
  unfollowPlaylist: (playlistId, username) => {
    dispatch(unfollowPlaylistProfilePage(playlistId, username));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
