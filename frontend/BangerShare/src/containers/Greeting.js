import { connect } from "react-redux";
import Greeting from "../components/HomeScreen/Greeting"

const mapStateToProps = (state) => {
    return { currentUser: state.UserReducer.currentUser }
}

export default connect(mapStateToProps)(Greeting);