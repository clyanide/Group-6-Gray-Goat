import { connect } from "react-redux";
import PlaylistCard from "../../../components/HomePage/Playlist/PlaylistCard";
import {
  setCurrentSong,
  setCurrentPlayingPlaylist,
} from "../../../actions/MusicPlayer";

const mapDispatchToProps = (dispatch) => ({
  setCurrentPlayingPlaylist: (playlist) => {
    dispatch(setCurrentPlayingPlaylist(playlist));
  },

  setCurrentSong: (song) => {
    dispatch(setCurrentSong(song));
  },
});

export default connect(null, mapDispatchToProps)(PlaylistCard);
