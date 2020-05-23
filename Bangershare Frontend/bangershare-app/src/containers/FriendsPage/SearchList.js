import { connect } from "react-redux";
import SearchList from "../../components/FriendsPage/SearchList"

const mapStateToProps = (state) => ({
    userList: state.userReducer.users
})

export default connect(mapStateToProps)(SearchList)