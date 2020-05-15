import { getColor } from "../actions/Color";
import { connect } from "react-redux"
import Color from "../components/HomeScreen/Color"

const mapStateToProps = (state) => {
    return { color: state.ColorReducer.color }
}

const mapDispatchToProps = (dispatch) => ({
    getNewColor: () => { dispatch(getColor()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Color)