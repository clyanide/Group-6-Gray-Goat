import { connect } from "react-redux";
import FriendsPage from "../../components/FriendsPage";

const mapStateToProps = (state) => ({
  isFetching: state.bangerShareReducer.fetching,
});

export default connect(mapStateToProps)(FriendsPage);
