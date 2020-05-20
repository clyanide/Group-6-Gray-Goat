import { connect } from "react-redux";
import FriendsList from "../../../components/FriendsPage/FriendsList";
import { deleteFriendRequest } from "../../../actions/Friends";


const mapStateToProps = (state) => ({
  friends: state.friendsReducer.friends,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFriend: (username) => { dispatch(deleteFriendRequest(username)) }
})
export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
