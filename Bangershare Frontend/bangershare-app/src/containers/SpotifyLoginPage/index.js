import { connect } from "react-redux";
import SpotifyLoginPage from "../../components/SpotifyLoginPage";
import { setToken } from "../../actions/Token";
import { push } from "connected-react-router";

const mapDispatchToProps = (dispatch) => ({
  setSpotifyToken: (token) => {
    dispatch(setToken(token));
  },
  push: (url) => {
    dispatch(push(url));
  },
});

export default connect(null, mapDispatchToProps)(SpotifyLoginPage);
