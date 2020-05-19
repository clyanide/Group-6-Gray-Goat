import { connect } from "react-redux";
import {
  updatePendingSong,
  deleteSongFromPlaylist,
} from "../../../actions/Song";
import PendingSongs from "../../../components/PlaylistPage/SongsList/PendingSongs";

const mapDispatchToProps = (dispatch) => ({
  updateSong: (song) => {
    dispatch(updatePendingSong(song));
  },
  deleteSong: (song) => {
    dispatch(deleteSongFromPlaylist(song));
  },
});

export default connect(null, mapDispatchToProps)(PendingSongs);
