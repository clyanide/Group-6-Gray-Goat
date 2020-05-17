import { connect } from "react-redux";
import FriendsPage from "../../components/FriendsPage";
import { getFriends } from "../../actions/Friends";

const mapStateToProps = (state) => ({
    isFetching: state.bangerShareReducer.fetching
})

const mapDispatchToProps = (dispatch) => ({
    loadFriends: () => { dispatch(getFriends()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage);