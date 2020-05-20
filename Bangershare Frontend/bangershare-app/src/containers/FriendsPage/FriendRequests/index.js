import { connect } from "react-redux";
import FriendRequests from "../../../components/FriendsPage/FriendRequests";
import { acceptPendingRequest } from "../../../actions/Friends";

const mapStateToProps = (state) => ({
  pendingFriends: state.friendsReducer.pendingFriends,
});

const mapDispatchToProps = (dispatch) => ({
  acceptRequest: (username) => { dispatch(acceptPendingRequest(username)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequests);
