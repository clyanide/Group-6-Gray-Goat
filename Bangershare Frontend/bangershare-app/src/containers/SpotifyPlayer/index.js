import { connect } from "react-redux";
import SpotifyPlayer from "../../components/MusicPlayer/SpotifyPlayer";

const mapStateToProps = (state) => {
  return {
    spotifyToken: state.spotifyTokenReducer.token,
    currentSong: state.musicPlayerReducer.currentSong,
  };
};

export default connect(mapStateToProps)(SpotifyPlayer);
