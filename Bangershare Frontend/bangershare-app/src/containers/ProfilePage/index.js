import ProfilePage from "../../components/ProfilePage"
import { connect } from "react-redux"
import { getProfilePlaylist } from "../../actions/Playlists";
import { push } from "connected-react-router";

const mapStateToProps = (state) => ({
    profilePlaylist: state.playlistRecucer.profilePlaylist
})

const mapDispatchToProps = (dispatch) => ({
    getProfilePlaylist: () => { dispatch(getProfilePlaylist()) },
    push: (url) => { dispatch(push(url)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)