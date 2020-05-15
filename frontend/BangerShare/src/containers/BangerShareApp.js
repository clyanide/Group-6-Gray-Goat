import { connect } from "react-redux";
import BangerShareApp from "../BangerShareApp"

const mapStateToProps = (state) => {
    return { currentUser: state.UserReducer.currentUser }
}

export default connect(mapStateToProps)(BangerShareApp)