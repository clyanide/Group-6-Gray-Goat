import { connect } from "react-redux";
import SpotifyPlayer from "../../components/MusicPlayer/SpotifyPlayer";
import { setCurrentSong } from "../../actions/MusicPlayer";

const mapStateToProps = (state) => {
  return {
    spotifyToken: state.spotifyTokenReducer.token,
    currentPlayingPlaylist: state.musicPlayerReducer.currentPlayingPlaylist,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSong: (song) => {
    dispatch(setCurrentSong(song));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyPlayer);
