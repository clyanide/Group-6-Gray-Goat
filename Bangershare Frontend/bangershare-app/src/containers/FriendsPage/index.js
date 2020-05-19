import { connect } from "react-redux";
import FriendsPage from "../../components/FriendsPage";
import { push } from "connected-react-router";
import { setUserProfile } from "../../actions/User";

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
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage);
