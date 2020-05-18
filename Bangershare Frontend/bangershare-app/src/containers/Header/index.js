import { connect } from "react-redux";
import AppHeader from "../../components/Header"

const mapStateToProps = (state) => ({
    currentUser: state.userReducer.currentUser,
})

export default connect(mapStateToProps)(AppHeader);