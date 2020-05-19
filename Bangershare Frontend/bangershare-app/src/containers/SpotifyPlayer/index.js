import { connect } from "react-redux";
import SpotifyPlayer from "../../components/MusicPlayer/SpotifyPlayer";

const mapStateToProps = (state) => {
  return {
    spotifyToken: state.spotifyTokenReducer.token,
  };
};

export default connect(mapStateToProps)(SpotifyPlayer);
