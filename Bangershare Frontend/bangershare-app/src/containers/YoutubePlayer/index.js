import { connect } from "react-redux";
import YoutubePlayer from "../../components/MusicPlayer/YoutubePlayer";
import { setCurrentSong } from "../../actions/MusicPlayer";

const mapStateToProps = (state) => {
  return {
    spotifyToken: state.spotifyTokenReducer.token,
    currentPlayingPlaylist: state.musicPlayerReducer.currentPlayingPlaylist,
    currentSong: state.musicPlayerReducer.currentSong,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSong: (song) => {
    dispatch(setCurrentSong(song));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(YoutubePlayer);
