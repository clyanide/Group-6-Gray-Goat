import { connect } from "react-redux";
import FriendsHeader from "../components/FriendsScreen/FriendsHeader";
import { toggleView } from "../actions/FriendsHeader";

const mapStateToProps = (state) => {
  return {
    currentView: state.friendsView.view,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleView: () => dispatch(toggleView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsHeader);
