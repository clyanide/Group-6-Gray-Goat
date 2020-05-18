import { connect } from "react-redux";
import HomePage from "../../components/HomePage";
import { getPlaylist, setCurrentPlaylist } from "../../actions/Playlists";
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
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
