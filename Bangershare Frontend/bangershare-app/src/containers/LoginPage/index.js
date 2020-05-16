import { connect } from "react-redux";
import { registerUser, loginUser } from "../../actions/User";
import LoginPage from "./../../components/LoginPage";

const mapDispatchToProps = (dispatch) => ({
  handleSignup: (userInfo) => {
    dispatch(registerUser(userInfo));
  },
  handleLogin: (userInfo) => {
    dispatch(loginUser(userInfo));
  },
});

export default connect(null, mapDispatchToProps)(LoginPage);
