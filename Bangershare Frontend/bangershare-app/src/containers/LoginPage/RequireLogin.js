import { connect } from "react-redux";
import RequireLogin from "../../components/LoginPage/RequireLogin";

const mapStateToProps = (state) => ({
  accessToken: state.userReducer.accessToken,
});

export default connect(mapStateToProps)(RequireLogin);
