import React from "react";
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { Text, View } from "react-native";
import SongList from "./SongList";


const Songs = () => {
    return (
        <Container>
            <Grid>
                <Row>
                    <SongList />
                </Row>
            </Grid>
        </Container>
    );
};

export default Songs;
