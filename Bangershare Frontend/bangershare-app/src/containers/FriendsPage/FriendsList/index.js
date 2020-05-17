import { connect } from "react-redux"
import FriendsList from "../../../components/FriendsPage/FriendsList"

const mapStateToProps = (state) => ({
    friends: state.friendsReducer.friends,
})

export default connect(mapStateToProps)(FriendsList);
