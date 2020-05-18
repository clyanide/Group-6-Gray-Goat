import { connect } from "react-redux";
import { addSongToPlaylist } from "../../actions/Playlists"
import CreateSongModal from "../../components/PlaylistPage/CreateSongModal"

const mapDispatchToProps = (dispatch) => ({
    postSong: (song) => { dispatch(addSongToPlaylist(song)) }
})

export default connect(null, mapDispatchToProps)(CreateSongModal);