import { connect } from "react-redux";
import FriendRequests from "../../../components/FriendsPage/FriendRequests";
import { acceptPendingRequest, deleteFriendRequest } from "../../../actions/Friends";

const mapStateToProps = (state) => ({
  pendingFriends: state.friendsReducer.pendingFriends,
});

const mapDispatchToProps = (dispatch) => ({
  acceptRequest: (username) => { dispatch(acceptPendingRequest(username)) },
  deleteRequest: (username) => { dispatch(deleteFriendRequest(username)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequests);
