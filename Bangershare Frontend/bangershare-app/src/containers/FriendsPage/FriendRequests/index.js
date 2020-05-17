import { connect } from "react-redux";
import FriendRequests from "../../../components/FriendsPage/FriendRequests";

const mapStateToProps = (state) => ({
  pendingFriends: state.friendsReducer.pendingFriends,
});

export default connect(mapStateToProps)(FriendRequests);
