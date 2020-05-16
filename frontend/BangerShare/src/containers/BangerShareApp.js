import { connect } from "react-redux";
import BangerShareApp from "../BangerShareApp"

const mapStateToProps = (state) => {
    return { accessToken: state.UserReducer.accessToken }
}

export default connect(mapStateToProps)(BangerShareApp)