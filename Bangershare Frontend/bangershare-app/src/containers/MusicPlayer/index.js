import { connect } from "react-redux";
import MusicPlayer from "../../components/MusicPlayer";
import {
  setType,
  setUri,
  setLink,
  setDuration,
} from "../../actions/MusicPlayer";

const mapStateToProps = (state) => {
  return {
    songType: state.musicPlayerReducer.songType,
    songUri: state.musicPlayerReducer.songUri,
    songLink: state.musicPlayerReducer.songLink,
    songDuration: state.musicPlayerReducer.songDuration,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setType: (type) => dispatch(setType(type)),
  setUri: (uri) => dispatch(setUri(uri)),
  setLink: (link) => dispatch(setLink(link)),
  setDuration: (duration) => dispatch(setDuration(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);
