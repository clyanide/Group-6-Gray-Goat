import { connect } from "react-redux";
import Loading from "../../components/general/Loading";

const mapStateToProps = (state) => ({
  isLoading: state.bangerShareReducer.isLoading,
});

export default connect(mapStateToProps)(Loading);
