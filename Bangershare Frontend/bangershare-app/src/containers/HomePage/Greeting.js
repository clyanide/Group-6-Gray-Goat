import { connect } from "react-redux";
import Greeting from "../../components/HomePage/Greeting";

const mapStateToProps = (state) => ({
  name: state.userReducer.currentUser.name,
});

export default connect(mapStateToProps)(Greeting);
