import React from "react";
import { Container, Footer } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { Text, View } from "react-native";
import SuggestionToggle from "./SuggestionToggle";


const Suggestions = (props) => {


    const {handleSuggestionToggle} = props;


    return (
        <Container>
            <Grid>
                <Row>
                    <SuggestionToggle handleSuggestionClick={handleSuggestionToggle}/>
                </Row>
            </Grid>
        </Container>
    );
};

export default Suggestions;
