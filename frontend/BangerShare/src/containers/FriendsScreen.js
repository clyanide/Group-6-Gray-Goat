import { connect } from "react-redux";
import FriendsScreen from "../components/FriendsScreen";

const mapStateToProps = (state) => {
  return {
    currentView: state.friendsView.view,
  };
};

export default connect(mapStateToProps)(FriendsScreen);
