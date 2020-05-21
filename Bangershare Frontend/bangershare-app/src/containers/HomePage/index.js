import { connect } from "react-redux";
import HomePage from "../../components/HomePage";
import { getPlaylist, setCurrentPlaylist, followPlaylistHomePage, unfollowPlaylistHomePage } from "../../actions/Playlists";
import { getFriends } from "../../actions/Friends";
import { push } from "connected-react-router";

const mapStateToProps = (state) => ({
  isFetching: state.bangerShareReducer.fetching,
  userPlaylist: state.playlistReducer.userPlaylist,
  friendPlaylist: state.friendsReducer.friends,
});

const mapDispatchToProps = (dispatch) => ({
  getUserPlaylists: () => {
    dispatch(getPlaylist());
  },
  loadFriends: () => {
    dispatch(getFriends());
  },
  setCurrentPlaylist: (playlist) => {
    dispatch(setCurrentPlaylist(playlist));
  },
  push: (url) => {
    dispatch(push(url));
  },
  followPlaylist: (playlistId) => {
    dispatch(followPlaylistHomePage(playlistId))
  },
  unfollowPlaylist: (playlistId) => {
    dispatch(unfollowPlaylistHomePage(playlistId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
