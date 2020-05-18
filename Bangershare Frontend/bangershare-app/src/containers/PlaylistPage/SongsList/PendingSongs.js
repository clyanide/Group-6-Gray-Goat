import { connect } from "react-redux";
import { updatePendingSong } from "../../../actions/Playlists"
import { deleteSong } from "../../../utility/API";
import PendingSongs from "../../../components/PlaylistPage/SongsList/PendingSongs"

const mapDispatchToProps = (dispatch) => ({
    updateSong: (song) => { dispatch(updatePendingSong(song)) },
    deleteSong: (song) => { dispatch() }
})

export default connect(null, mapDispatchToProps)(PendingSongs);
