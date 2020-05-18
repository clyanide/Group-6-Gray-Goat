import { connect } from "react-redux";
import { deleteSongFromPlaylist } from "../../../actions/Playlists"
import Songs from "../../../components/PlaylistPage/SongsList/Songs"

const mapDispatchToProps = (dispatch) => ({
    deleteSong: (song) => { dispatch(deleteSongFromPlaylist(song)) }
})


export default connect(null, mapDispatchToProps)(Songs)