import { connect } from "react-redux";
import { registerUser, loginUser } from "../../actions/User";
import LoginForm from "./../../components/LoginPage/LoginForm";

const mapStateToProps = (state) => ({
  isFetching: state.bangerShareReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  handleSignup: (userInfo) => {
    dispatch(registerUser(userInfo));
  },
  handleLogin: (userInfo) => {
    dispatch(loginUser(userInfo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
