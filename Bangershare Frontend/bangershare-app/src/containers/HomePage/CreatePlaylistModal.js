import { connect } from "react-redux";
import CreatePlaylistModal from "../../components/HomePage/CreatePlaylistModal"
import { createPlaylist } from "../../actions/Playlists"

const mapDispatchToProps = (dispatch) => ({
    createPlaylist: (playlistName) => { dispatch(createPlaylist(playlistName)) }
})


export default connect(null, mapDispatchToProps)(CreatePlaylistModal);