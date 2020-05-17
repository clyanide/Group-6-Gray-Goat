import { connect } from "react-redux";
import HomePage from "../../components/HomePage"
import { getPlaylist } from "../../actions/Playlists"

const mapStateToProps = (state) => ({
    fetching: state.bangerShareReducer,
})

const mapDispatchToProps = (dispatch) => ({
    getUserPlaylists: () => { dispatch(getPlaylist()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);