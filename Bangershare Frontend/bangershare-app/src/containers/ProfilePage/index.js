import ProfilePage from "../../components/ProfilePage"
import { connect } from "react-redux"
import { getPlaylistForProfile } from "../../actions/Playlists";
import { push } from "connected-react-router";

const mapStateToProps = (state) => ({
    profilePlaylist: state.playlistReducer.profilePlaylist
})

const mapDispatchToProps = (dispatch) => ({
    getProfilePlaylist: () => { dispatch(getPlaylistForProfile()) },
    push: (url) => { dispatch(push(url)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)