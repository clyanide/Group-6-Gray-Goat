import { connect } from "react-redux";
import AppHeader from "../../components/Header"

const mapStateToProps = (state) => ({
    currentUser: state.userReducer.currentUser,
    currentPath: state.router.location.pathname
})

export default connect(mapStateToProps)(AppHeader);