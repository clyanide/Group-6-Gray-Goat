import { connect } from "react-redux";
import CreateSongList from "../../../components/PlaylistPage/SongsList/CreateSongList";
import { setCurrentSong } from "../../../actions/MusicPlayer";

const mapDispatchToProps = (dispatch) => ({
  handleSongClick: (song) => {
    dispatch(setCurrentSong(song));
  },
});

export default connect(null, mapDispatchToProps)(CreateSongList);
