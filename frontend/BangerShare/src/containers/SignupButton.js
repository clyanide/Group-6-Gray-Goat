import { connect } from "react-redux";
import { registerUser } from "../actions/User";
import SignupButton from "../components/LoginPage/SignUp/SignupButton";

const mapDispatchToProps = (dispatch, ownProps) => ({
  userInfo: ownProps.userInfo,
  onSignupPress: (userInfo) => {
    dispatch(registerUser(userInfo));
  },
});

export default connect(null, mapDispatchToProps)(SignupButton);
