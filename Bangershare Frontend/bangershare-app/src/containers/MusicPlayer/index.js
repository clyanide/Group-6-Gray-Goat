import { connect } from "react-redux";
import MusicPlayer from "../../components/MusicPlayer";

const mapStateToProps = (state) => {
  return {
    currentSong: state.musicPlayerReducer.currentSong,
  };
};

export default connect(mapStateToProps)(MusicPlayer);
