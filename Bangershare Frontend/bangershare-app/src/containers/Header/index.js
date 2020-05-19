import { connect } from "react-redux";
import AppHeader from "../../components/Header";
import { setUserProfile } from "../../actions/User";
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
