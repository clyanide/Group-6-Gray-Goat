import React from 'react';
import { connect } from "react-redux"
import { Text, Container, Button } from "native-base";
import { bindActionCreators } from 'redux';
import { getColor } from "../../actions/Color";

const Color = (props) => {
    const { getNewColor, color } = props

    console.log(color)
    if (color) {
        return (<Container>
            <Text>{color}</Text>
            <Button onPress={() => getNewColor()} />
        </Container>)
    }

    return null;
}

const mapStateToProps = (state) => {
    return { color: state.ColorReducer.color }
}

const mapDispatchToProps = (dispatch) => ({
    getNewColor: () => { dispatch(getColor()) }
})
export default connect(mapStateToProps, mapDispatchToProps)(Color)