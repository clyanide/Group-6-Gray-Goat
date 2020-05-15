import { connect } from "react-redux";
import { registerUser } from "../actions/User"
import SignupButton from "../components/LoginPage/SignUp/SignupButton"

const mapDispatchToProps = (dispatch, ownProps) => ({
    signUpInfo: ownProps.signUpInfo,
    onSignupPress: (loginInfo) => { dispatch(registerUser(loginInfo)) }
})

export default connect(null, mapDispatchToProps)(SignupButton)