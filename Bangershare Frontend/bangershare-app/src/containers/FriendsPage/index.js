import { connect } from "react-redux";
import FriendsPage from "../../components/FriendsPage";
import { push } from "connected-react-router";
import { setUserProfile, getAllUsers } from "../../actions/User";
import { getFriends } from "../../actions/Friends";

const mapStateToProps = (state) => ({
  isFetching: state.bangerShareReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  setProfileUser: (username) => {
    dispatch(setUserProfile(username));
  },
  push: (url) => {
    dispatch(push(url));
  },
  getFriends: () => {
    dispatch(getFriends());
  },
  getUsers: () => {
    dispatch(getAllUsers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage);
