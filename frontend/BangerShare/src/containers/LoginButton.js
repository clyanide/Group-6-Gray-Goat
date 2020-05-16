import { connect } from "react-redux";
import { loginUser } from "../actions/User"
import LoginButton from "../components/LoginPage/Login/LoginButton"

const mapDispatchToProps = (dispatch, ownProps) => ({
    userInfo: ownProps.userInfo,
    onLoginPress: (userInfo) => { dispatch(loginUser(userInfo)) }
})

export default connect(null, mapDispatchToProps)(LoginButton)