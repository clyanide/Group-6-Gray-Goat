import { connect } from "react-redux";
import AppHeader from "../../components/Header";
import { setUserProfile, logoutUser, setCurrentUser } from "../../actions/User";
import { push } from "connected-react-router";

const mapStateToProps = (state) => ({
  currentUser: state.userReducer.currentUser,
  currentPath: state.router.location.pathname,
  isFetching: state.bangerShareReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  setProfileUser: (username) => {
    dispatch(setUserProfile(username));
  },
  push: (url) => {
    dispatch(push(url));
  },
  signOut: () => {
    dispatch(logoutUser())
  },
  setCurrentUser: (username) => {
    dispatch(setCurrentUser(username))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
