import { connect } from "react-redux";
import SpotifyLoginPage from "../../components/SpotifyLoginPage";
import { setToken } from "../../actions/Token";

const mapDispatchToProps = (dispatch) => ({
  setSpotifyToken: (token) => {
    dispatch(setToken(token));
  },
});

export default connect(null, mapDispatchToProps)(SpotifyLoginPage);
